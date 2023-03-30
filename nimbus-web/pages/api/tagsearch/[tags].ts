import sql from "../../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { tags } = req.query;
    if (!tags) res.status(500);
    try {
        const splitted = (tags as string).split(",");
        const location_data = await sql`
        SELECT L.loc_id, L.loc_name, string_agg(B.tag_name, ',') as full_tag_list,
        string_agg(CASE WHEN B.tag_name IN ${sql(
            splitted
        )} THEN B.tag_name END, ',') as filtered_tag_list,
        I.url, L.est_time_stay, L.price_level, L.lat, L.lng, L.rating
        FROM location_data L
        JOIN belong_to B ON L.loc_id = B.loc_id 
        JOIN image I ON I.loc_id = L.loc_id
        GROUP BY L.loc_id, I.url
        HAVING COUNT(CASE WHEN B.tag_name IN ${sql(splitted)} THEN 1 END) = ${
            splitted.length
        }`;
        console.log(location_data);
        res.status(200).json(location_data);
    } catch (e) {
        console.log(e);
        res.status(500);
    }
}
