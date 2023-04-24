import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    type Location = {
        loc_id: number;
        loc_name: string;
        price_level: number;
        description: string;
        lat: number;
        lng: number;
        province: string;
        rating: string;
        est_time_stay: number;
        view_count: number;
        partner: boolean;
        address: string;
        url: string;
    };

    const loc_ids_obj = req.body;
    let loc_ids: any = [];
    const lengthOfDays: any = [];

    Object.keys(loc_ids_obj).forEach((key: any) => {
        console.log(...loc_ids_obj[key]);

        loc_ids.push(...loc_ids_obj[key]);
        lengthOfDays.push(loc_ids_obj[key].length);
    });
    console.log(loc_ids_obj);
    console.log(loc_ids);

    let query = sql`SELECT L.*, string_agg(DISTINCT I.url, ', ') as url
    FROM location_data L
    LEFT OUTER JOIN image I
    ON L.loc_id = I.loc_id
    WHERE  L.loc_id IN  ${sql([loc_ids])} GROUP BY L.loc_id
    ORDER BY CASE
                    ${loc_ids.map(
                        (locId: any, index: any) => sql`
                    WHEN L.loc_id = ${locId} THEN ${index + 1}
                    `
                    )}
                    ELSE ${loc_ids.length + 1}
                END`;

    try {
        const location_data: Array<Location> = await query;
        // console.log(location_data);

        const return_obj: any = [];
        // console.log(lengthOfDays);

        lengthOfDays.forEach((len: any, index: any) => {
            // console.log(len);

            return_obj.push({
                day: index,
                location_data: location_data.slice(0, len),
            });
            location_data.splice(0, len);
        });
        // console.log(return_obj);

        res.status(200).json(return_obj);
    } catch (e) {
        console.log(e);

        res.status(500).json("Error occured");
    }
}
