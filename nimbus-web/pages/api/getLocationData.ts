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

    const loc_ids: string = req.query.loc_ids! as string;
    const day: string | string[] | undefined = req.query.day;
    const arr: Array<number> = JSON.parse(loc_ids);

    let query = sql`SELECT L.*, I.url
    FROM location_data L
    LEFT OUTER JOIN image I
    ON L.loc_id = I.loc_id
    WHERE  L.loc_id IN  ${sql([arr])} `;

    try {
        if (!arr) {
            return null;
        }

        const location_data: Array<Location> = await query;
        res.status(200).json({ day: day, location_data });
        // res.status(200).json(location_data);
    } catch (e) {
        console.log(e);

        res.status(500).json("Error occured");
    }
}
