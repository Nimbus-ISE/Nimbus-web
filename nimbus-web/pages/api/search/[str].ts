import sql from "../../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { str } = req.query;
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
