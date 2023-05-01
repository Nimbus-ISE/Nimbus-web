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
    // console.log(req.body);

    let loc_ids: any = [];
    const lengthOfDays: any = [];

    Object.keys(loc_ids_obj).forEach((key: any) => {
        loc_ids.push(...loc_ids_obj[key]);
        lengthOfDays.push(loc_ids_obj[key].length);
    });

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

        const return_obj: any = [];

        // console.log(location_data);
        const correct_return_obj: any = [];

        location_data.forEach((location: any, index: any) => {
            const cor_index = loc_ids.indexOf(location.loc_id);
            console.log(cor_index);

            correct_return_obj[cor_index] = location;
        });
        console.log("Hello", correct_return_obj);

        lengthOfDays.forEach((len: any, index: any) => {
            return_obj.push({
                day: index,
                location_data: correct_return_obj.slice(0, len),
            });
            correct_return_obj.splice(0, len);
        });

        // console.log(location_data);

        // console.log(correct_return_obj);

        res.status(200).json(return_obj);
    } catch (e) {
        console.log(e);

        res.status(500).json("Error occured");
    }
}
