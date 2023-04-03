import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const loc_id = req.query.loc_id;
    try {
        const location_data =
            await sql`SELECT L.loc_id, L.loc_name, L.description, L.province, 
        L.rating AS location_rating, R.review_text, 
        R.author, R.rating AS review_rating, R.review_date, I.url
        FROM location_data L, review R, image I
        WHERE L.loc_id = R.loc_id AND R.loc_id = I.loc_id AND L.loc_id IN (${loc_id})
        GROUP BY L.loc_id, R.review_text, R.author, R.review_date, R.rating, I.url`;
        console.log(location_data);

        res.status(200).json(location_data);
    } catch (e) {
        console.log(e);
        res.status(500).json("Error occured");
    }
}
