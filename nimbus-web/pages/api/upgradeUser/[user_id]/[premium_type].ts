import sql from "../../../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
//import { createClient } from "redis";
//import getManagementToken from "@/utils/api/getManagementToken";

/*const client = createClient({
    password: process.env.REDIS_PW,
    socket: {
        host: process.env.REDIS_HOST,
        port: 17356,
    },
});*/

export default withApiAuthRequired(async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { user_id, premium_type } = req.query;
    const validPremiumTypes = ["Monthly", "Yearly", "None"];

    if (typeof user_id !== "string" || typeof premium_type !== "string") {
        console.log("Invalid parameters");
        return res.status(400).json({ message: "Invalid parameters" });
    }

    if (!validPremiumTypes.includes(premium_type)) {
        console.log("Invalid premium type");
        return res.status(400).json({ message: "Invalid premium type" });
    }

    /*const tokenData = await getManagementToken(client, user_id);
    if (!tokenData) {
        console.log("No token data");
        return res.status(500).json({ message: "No token data" });
    }*/

    try {
        await sql`
            UPDATE user_data
            SET premium_type = ${premium_type},
                premium_expire = CURRENT_DATE + INTERVAL ${
                    premium_type === "Monthly" ? sql`'1 month'` : sql`'1 year'`
                }
            WHERE user_id = ${user_id}
            `;

        /*await updateMetadata(tokenData, user_id, {
            premium_type,
            premium_expire: premium_type === "None" ? null : new Date(),
        });*/
        console.log(`User ${user_id} updated to premium ${premium_type}`);
        res.status(200).json({ success: true });
    } catch (e) {
        console.log("SQL Error", e);
        res.status(500).json({ message: "Database error" });
    }
});
