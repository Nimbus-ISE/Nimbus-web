import { tags } from "@/misc";
import sql from "../../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import getUniqueList from "@/utils/getUniqueList";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { str } = req.query;
    console.log(str);
    if (str?.includes(",") || tags.includes(str as string)) {
        const tags = str;
        try {
            const splitted = (tags as string).split(",");
            const location_data = await sql`
            SELECT 
                L.loc_id, 
                L.loc_name, 
                string_agg(B.tag_name, ',') as full_tag_list,
                string_agg(
                    CASE 
                        WHEN B.tag_name IN ${sql(splitted)} THEN B.tag_name 
                    END, 
                    ','
                ) as filtered_tag_list,
                I.url,
                L.est_time_stay, 
                L.price_level, 
                L.lat, 
                L.lng, 
                L.rating
            FROM 
                image I
                JOIN (
                    SELECT DISTINCT ON (url) url, loc_id
                    FROM image
                ) I2 ON I.url = I2.url
                JOIN location_data L ON L.loc_id = I2.loc_id
                JOIN belong_to B ON L.loc_id = B.loc_id
            GROUP BY 
                L.loc_id, I.url
            HAVING 
                COUNT(CASE WHEN B.tag_name IN ${sql(splitted)} THEN 1 END) = ${
                splitted.length
            }`;
            console.log(location_data);
            const uniqueLocationData = getUniqueList(location_data, "loc_id");

            res.status(200).json(uniqueLocationData);
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    } else {
        try {
            const location_data = await sql`
            SELECT * FROM location_data WHERE UPPER(loc_name) LIKE ${
                str + "%"
            } ORDER BY loc_name LIMIT 5`;
            console.log(location_data);
            res.status(200).json(location_data);
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    }
}
