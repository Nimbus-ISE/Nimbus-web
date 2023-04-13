import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const loc_ids: any = req.query.loc_ids;
    const day: any = req.query.day;
    const arr: any = JSON.parse(loc_ids);
    let query: any = sql`SELECT L.*, I.url
    FROM location_data L
    LEFT OUTER JOIN image I
    ON L.loc_id = I.loc_id
    WHERE  L.loc_id IN  ${sql([arr])} `;
    // let query: any = sql`
    //         SELECT L.loc_id, L.loc_name, L.description, L.province, L.address, L.lat, L.lng,
    //         L.rating AS location_rating, R.review_text,
    //         R.author, R.rating AS review_rating, R.review_date, R.url AS review_url, I.url,
    //         string_agg(B.tag_name, ', ') as full_tag_list
    //         FROM location_data L
    //         JOIN review R ON L.loc_id = R.loc_id
    //         JOIN image I ON R.loc_id = I.loc_id
    //         JOIN belong_to B ON L.loc_id = B.loc_id
    //         WHERE L.loc_id IN  ${sql([arr])}
    //         GROUP BY L.loc_id, R.review_text, R.author, R.review_date, R.rating, R.url, I.url
    //         `;

    try {
        if (!arr) {
            return null;
        }
        // arr.forEach((loc_id: any, index: any) => {
        //     query += sql`WHEN ${loc_id} THEN ${index + 1} `;
        // });
        // query += sql`ELSE ${arr.length + 1} END;`;

        const location_data = await query;
        // const location_data = await sql`SELECT L.*, I.url
        // FROM location_data L
        // LEFT OUTER JOIN image I
        // ON L.loc_id = I.loc_id
        // WHERE  L.loc_id =113`;

        res.status(200).json({ day: day, location_data });
        // res.status(200).json(location_data);
    } catch (e) {
        console.log(e);

        res.status(500).json("Error occured");
    }
}
