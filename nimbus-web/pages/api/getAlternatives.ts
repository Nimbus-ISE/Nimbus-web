import sql from "../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const data = req.body;
        console.log(data);
        console.log(data.trip[0]);

        const response = await fetch(
            "http://34.143.131.141:8080/get_alternative_place",
            {
                method: "POST",
                body: JSON.stringify(data),

                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": "thisisforpip",
                },
            }
        );
        const result = await response.json();

        res.status(200).json(result);
    } catch (e) {
        console.log(e);

        res.status(500).json("Error occured");
    }
}
