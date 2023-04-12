import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const loc_ids: any = req.query.loc_ids;
    const day: any = req.query.day;
    const arr: any = JSON.parse(loc_ids);
    let query: any = sql`SELECT L.*, I.url
    FROM location_data L
    LEFT OUTER JOIN image I
    ON L.loc_id = I.loc_id
    WHERE  L.loc_id IN  ${sql([arr])} `;

    try {
        if (!arr) {
            return null;
        }
        // arr.forEach((loc_id: any, index: any) => {
        //     query += sql`WHEN ${loc_id} THEN ${index + 1} `;
        // });
        // query += sql`ELSE ${arr.length + 1} END;`;

        const location_data = await query;
        // const location_data = await sql`SELECT L.*, I.url
        // FROM location_data L
        // LEFT OUTER JOIN image I
        // ON L.loc_id = I.loc_id
        // WHERE  L.loc_id =113`;

        console.log(location_data);

        res.status(200).json({ day: day, location_data });
        // res.status(200).json(location_data);
    } catch (e) {
        console.log(e);

        res.status(500).json("Error occured");
    }
}
