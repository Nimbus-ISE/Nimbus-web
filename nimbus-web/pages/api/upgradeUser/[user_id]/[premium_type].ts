import sql from "../../../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { user_id, premium_type } = req.query;
    console.log(user_id, premium_type);
    try {
        if (premium_type === "Monthly") {
            await sql`
            UPDATE user_data
            SET premium_type = 'Monthly',
                premium_expire =  CURRENT_DATE + INTERVAL '1 month'
            WHERE user_id = ${user_id}`;
        } else if (premium_type === "Yearly") {
            await sql`
            UPDATE user_data
            SET premium_type = 'Yearly',
                premium_expire =  CURRENT_DATE + INTERVAL '1 year'
            WHERE user_id = ${user_id}`;
        } else {
            res.status(500).json("Invalid premium_type");
        }
        res.status(200).json("Success");
    } catch (e) {
        console.log(e);
        res.status(500).json("Error occured");
    }
});
