import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const query = sql`WITH ins_plan AS (
            INSERT INTO plan (plan_name, est_price_level, plan_sequence)
            VALUES (${req.body[0].name}, 2, ${JSON.stringify(req.body)})
            RETURNING plan_id AS temp_id
        )
        , ins_save_plan AS (
            INSERT INTO saved (user_id, plan_id)
            SELECT 'auth0|642c62dc9e6ad19131004860', temp_id FROM ins_plan
            )
        INSERT INTO part_of (plan_id, loc_id)
        SELECT temp_id, unnest(array[25, 26, 27]) FROM ins_plan; 
        `;

        const result = await query;

        res.status(200).json(result);
    } catch (e) {
        console.log(e);

        res.status(500).json("Error occured");
    }
}
