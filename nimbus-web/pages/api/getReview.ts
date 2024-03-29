import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    interface Review {
        review_text: string;
        author: string;
        review_rating: string;
        review_date: Date;
        review_url: string;
        full_tag_list: string;
    }
    const loc_id: string = req.query.loc_id! as string;

    let query = sql`
            SELECT  R.review_text,
            R.author, R.rating AS review_rating, R.review_date, R.url AS review_url,
            string_agg(B.tag_name, ', ') as full_tag_list
            FROM review R
            JOIN belong_to B ON R.loc_id = B.loc_id
            WHERE R.loc_id =  ${loc_id}
            GROUP BY  R.review_text, R.author, R.review_date, R.rating, R.url
            `;

    try {
        const review_data: Array<Review> = await query;

        res.status(200).json(review_data);
        // res.status(200).json(location_data);
    } catch (e) {
        console.log(e);

        res.status(500).json("Error occured");
    }
}
