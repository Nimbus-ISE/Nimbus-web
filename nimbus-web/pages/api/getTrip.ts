import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let origin;
    let destination;
    try {
        const response = await fetch(
            "http://34.28.125.106:5000/get_sample_trip"
        );

        const result = await response.json();
        const points: any = [];

        result.forEach((day: any) => {
            const temp: any = [];
            day.forEach((point: any) => {
                temp.push(point.coordinate);
            });
            points.push(temp);
        });
        res.status(200).json({ result, points });
    } catch (err) {
        res.status(500).json("error invalid url");
    }
}
