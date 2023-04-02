import sql from "../../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import {
    getSession,
    handleProfile,
    updateSession,
    withApiAuthRequired,
} from "@auth0/nextjs-auth0";
import { createClient } from "redis";

const client = createClient({
    password: process.env.REDIS_PW,
    socket: {
        host: process.env.REDIS_HOST,
        port: 17356,
    },
});

//protected route (user must be authenticated)
export default withApiAuthRequired(async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { user_id } = req.query;
    //gets premium status from database through user_id
    const premiumStatusData =
        await sql`SELECT premium_type,premium_expire FROM user_data where user_id=${user_id}`;
    console.log(premiumStatusData);
    //checks if premium status is expired or not
    const checkPremiumStatus = ({
        premium_type,
        premium_expire,
    }: {
        premium_type: string;
        premium_expire: Date;
    }): string => {
        if (premium_type === "None" || Date.now() < Number(premium_expire))
            return premium_type;
        return "None";
    };
    if (req.method === "PUT") {
        client.on("error", (err) => console.log("Redis Client Error", err));
        await client.connect();
        const tokenCache = await client.get("management-access-token");
        try {
            console.log(
                tokenCache,
                process.env.AUTH0_MANAGEMENT_CLIENT_ID,
                `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${user_id}`
            );
            let tokenData: any = {};
            if (!tokenCache) {
                console.log("cache not found");
                const tokenResponse = await fetch(
                    `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            client_id: process.env.AUTH0_MANAGEMENT_CLIENT_ID,
                            client_secret:
                                process.env.AUTH0_MANAGEMENT_CLIENT_SECRET,
                            audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
                            grant_type: "client_credentials",
                        }),
                    }
                );
                if (!tokenResponse.ok) {
                    throw new Error("Network tokenResponse was not ok");
                }
                tokenData = await tokenResponse.json();
                await client.set(
                    "management-access-token",
                    tokenData.access_token,
                    {
                        EX: 86400,
                        NX: true,
                    }
                );
            } else {
                tokenData.access_token = tokenCache;
            }
            console.log(
                tokenData.access_token,
                tokenCache,
                process.env.AUTH0_MANAGEMENT_CLIENT_ID,
                `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${user_id}`
            );
            try {
                const patchResponse = await fetch(
                    `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${user_id}`,
                    {
                        method: "PATCH",
                        headers: {
                            authorization: `Bearer ${tokenData.access_token}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            user_metadata: {
                                premium: checkPremiumStatus(
                                    premiumStatusData[0]
                                ),
                                premium_expire: Number(
                                    premiumStatusData[0].premium_expire
                                ),
                            },
                        }),
                    }
                );
                if (!patchResponse.ok) {
                    console.log(patchResponse.status, patchResponse.statusText);
                    throw new Error("Network patchResponse was not ok");
                }
                const data = await patchResponse.json();
                console.log(data);
            } catch (error) {
                console.error(
                    "There was a problem with the patch operation:",
                    error
                );
            }
        } catch (error) {
            console.error(
                "There was a problem with the fetch operation:",
                error
            );
        }

        /*try {
            const session = await getSession(req, res);
            if (session) {
                try {
                    //appends premium status and premium_expire to the session/user object
                    await handleProfile(req, res, {
                        refetch: true,
                    });
                    await updateSession(req, res, {
                        ...session,
                        user: {
                            ...session.user,
                            premium: checkPremiumStatus(premiumStatusData[0]),
                            premium_expire: premiumStatusData[0].premium_expire,
                        },
                    });
                    console.log({
                        ...session,
                        user: {
                            ...session.user,
                            premium: checkPremiumStatus(premiumStatusData[0]),
                            premium_expire: premiumStatusData[0].premium_expire,
                        },
                    });
                    res.json({ success: true });
                } catch (e) {
                    console.log(e);
                    res.status(500);
                }
            } else {
                res.status(500);
            }
        } catch (e) {
            console.log(e);
            res.status(500);
        }
        res.status(500);*/
    }
});
