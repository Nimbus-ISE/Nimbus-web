import type { NextApiRequest, NextApiResponse } from "next";
import sql from "@/postgres";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import getManagementToken from "@/utils/api/getManagementToken";
import { createClient } from "redis";
import getMetadata from "@/utils/api/getMetadata";
import checkPremiumExpire from "@/utils/checkPremiumExpire";

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
    try {
        const { user_id } = req.query;
        if (req.method === "PUT" && typeof user_id === "string") {
            //fetch access_token from management api
            const tokenData = await getManagementToken(client, user_id);
            if (tokenData) {
                const { app_metadata } = await getMetadata(tokenData, user_id);
                //checks if premium is expired, if expired then remove premium, if not do nothing
                console.log(app_metadata);
                if (checkPremiumExpire(app_metadata)) {
                    console.log("Removing premium");
                    /*await updateMetadata(tokenData, user_id, {
                        premium_type: "None",
                        premium_expire: Date.now(),
                    });*/
                    try {
                        await sql`UPDATE user_data
                        SET premium_type = 'None', premium_expire = CURRENT_DATE
                        WHERE user_id = ${user_id}`;
                        console.log("Premium expired, removed premium", res);
                        return res.status(200).json({ expired: true });
                    } catch (e) {
                        console.log("DB error");
                        return res.status(500).send("DB error");
                    }
                }
                console.log("User unchanged");
                return res.status(200).json({ expired: false });
            } else {
                console.log("No token data found");
                return res.status(500).send("No token data found");
            }
        } else {
            console.log("invalid request method or invalid user_id param");
            return res
                .status(500)
                .send("Invalid request method or invalid user_id param");
        }
    } catch (error) {
        console.error("There was an error processing the request:", error);
        return res
            .status(500)
            .send("There was an error processing the request");
    }
});
