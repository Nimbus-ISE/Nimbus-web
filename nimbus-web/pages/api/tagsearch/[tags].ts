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
        SELECT L.loc_id, L.loc_name, string_agg(T.tag_name, ',') AS tag_list, L.est_time_stay, L.price_level, L.lat, L.long, L.rating
        FROM location_data L
        JOIN belong_to B ON L.loc_id = B.loc_id
        JOIN tag T ON B.tag_name = T.tag_name
        WHERE T.tag_name IN ${sql(splitted)}
        GROUP BY L.loc_id, L.loc_name, L.est_time_stay, L.price_level, L.lat, L.long, L.rating
        HAVING COUNT(DISTINCT T.tag_name) = ${splitted.length}`;
        console.log(location_data);
        res.status(200).json(location_data);
    } catch (e) {
        console.log(e);
        res.status(500);
    }
}
