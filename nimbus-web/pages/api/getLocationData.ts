import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const loc_ids: any = req.query.loc_ids;
    console.log(loc_ids);

    const arr: any = JSON.parse(loc_ids);
    try {
        const location_data =
            await sql`SELECT L.loc_id, L.loc_name, L.description, L.province, 
        L.rating AS location_rating,L.lat,L.lng, I.url
        FROM location_data L,  image I
        WHERE L.loc_id = I.loc_id AND L.loc_id IN ${sql([arr])}
        GROUP BY L.loc_id, I.url`;
        console.log(location_data);

        res.status(200).json(location_data);
    } catch (e) {
        console.log(e);
        res.status(500).json("Error occured");
    }
}
