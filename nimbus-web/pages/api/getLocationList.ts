import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const location_data = await sql`
        select * from location_data`;

        res.status(200).json(location_data);
    } catch (e) {
        res.status(500).json("Error occured");
    }
}
