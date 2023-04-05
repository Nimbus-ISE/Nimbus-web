import { RedisClientType } from "@redis/client";

const getManagementToken = async (client: any, user_id: string) => {
    client.on("error", (err: any) => console.log("Redis Client Error", err));
    await client.connect().catch((error: any) => console.log(error));
    const tokenCache = await client.get("management-access-token");
    try {
        let tokenData: { [key: string]: string } = {};
        if (!tokenCache) {
            console.log("cache not found");
            //fetch from auth0's management API if no cache was found
            try {
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
                //stores the access token in cache
                await client.set(
                    "management-access-token",
                    tokenData.access_token,
                    {
                        EX: 86400,
                        NX: true,
                    }
                );
                return tokenData;
            } catch (e) {
                console.error(
                    "There was a problem with the tokenResponse: ",
                    e
                );
            }
        } else {
            tokenData.access_token = tokenCache;
            return tokenData;
        }
    } catch (error) {
        console.error(
            "There was a problem with the getManagementToken: ",
            error
        );
    }
};

export default getManagementToken;
