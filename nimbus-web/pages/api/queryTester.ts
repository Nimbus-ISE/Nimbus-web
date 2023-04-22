// import sql from "../../postgres";
// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     let query = sql`SELECT L.*, I.url
//     FROM location_data L
//     LEFT OUTER JOIN image I
//     ON L.loc_id = I.loc_id
//     WHERE  L.loc_id IN  ${sql([arr])} `;

//     try {
//         res.status(200).json({ day: day, location_data });
//         // res.status(200).json(location_data);
//     } catch (e) {
//         console.log(e);

//         res.status(500).json("Error occured");
//     }
// }
