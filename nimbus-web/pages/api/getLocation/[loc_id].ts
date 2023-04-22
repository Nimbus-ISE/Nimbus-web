import sql from "../../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import getLocation from "@/utils/api/getLocation";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { loc_id } = req.query;

    try {
        const location_data = await getLocation(loc_id as string);
        res.status(200).json(location_data);
    } catch (e) {
        res.status(500);
    }
}
