import type { NextApiRequest, NextApiResponse } from "next";
import sql from "@/postgres";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

//protected route (user must be authenticated)
export default withApiAuthRequired(async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { user_id } = req.query;
    if (req.method === "PUT" && typeof user_id === "string") {
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
    } else {
        console.log("No token data found");
        return res.status(500).send("No token data found");
    }
});
