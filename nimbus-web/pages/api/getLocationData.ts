import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const loc_ids: any = req.query.loc_ids;
    const day: any = req.query.day;
    const arr: any = JSON.parse(loc_ids);
    try {
        if (!arr) {
            return null;
        }
        const location_data = await sql`SELECT L.*, I.url
            FROM location_data L,  image I
            WHERE L.loc_id = I.loc_id AND L.loc_id IN ${sql([arr])}
            GROUP BY L.loc_id, I.url`;

        res.status(200).json({ day: day, location_data });
    } catch (e) {
        res.status(500).json("Error occured");
    }
}
