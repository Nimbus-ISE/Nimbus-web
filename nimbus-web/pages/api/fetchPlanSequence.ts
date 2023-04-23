import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const plan_id = req.body;
        console.log(plan_id);

        // const response =
        //     await sql`SELECT L.*, string_agg(DISTINCT I.url, ', ') as url
        // FROM location_data L
        // LEFT OUTER JOIN image I
        // ON L.loc_id = I.loc_id
        // WHERE  L.loc_id IN  ${sql([arr])} GROUP BY L.loc_id`;

        // const result = await response.json();

        // res.status(200).json(result);
    } catch (e) {
        console.log(e);

        res.status(500).json("Error occured");
    }
}
