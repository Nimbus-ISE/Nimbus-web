import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const loc_id = req.query.loc_id;
    try {
        const location_data = await sql`
        select * from location_data where loc_id=${loc_id}`;

        res.status(200).json(location_data);
    } catch (e) {
        console.log(e);
        res.status(500).json("Error occured");
    }
}
