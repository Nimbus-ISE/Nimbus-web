import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const location_data = await sql`
        SELECT L.loc_id, L.loc_name, string_agg(B.tag_name, ',') as full_tag_list,   
            I.url, L.price_level, L.lat, L.lng, L.rating 
        FROM location_data L 
		JOIN belong_to B ON L.loc_id = B.loc_id  
        JOIN image I ON I.loc_id = L.loc_id 
		GROUP BY L.loc_id, I.url`;

        res.status(200).json(location_data);
    } catch (e) {
        res.status(500).json("Error occured");
    }
}
