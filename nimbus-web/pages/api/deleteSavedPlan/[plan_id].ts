import sql from "../../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { plan_id } = req.query;
    try {
        // testing without deleting actual data
        await sql`SELECT * from saved WHERE plan_id = ${plan_id}`;
        // await sql`DELETE from saved WHERE plan_id = ${plan_id}`;
        return res.status(200).json({ message: "Success" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Error getting saved plan" });
    }
}
