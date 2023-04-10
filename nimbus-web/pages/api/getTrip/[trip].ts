import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let origin;
    let destination;
    const { trip } = req.query;
    try {
        const payload = JSON.parse(decodeURIComponent(trip as string));
        const response = await fetch(
            "http://34.28.125.106:5000/get_trip_mcts",
            {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": "thisisforpip",
                },
            }
        );

        const result = await response.json();
        const travelTimes: any = [];
        const locations: any = [];

        result.forEach((day: any) => {
            const tempTravelTime: any = [];
            const tempLocations: any = [];
            day.forEach((point: any, index: any) => {
                if (index % 2 === 0) tempLocations.push(point.loc_id);
                else tempTravelTime.push(point);
            });
            travelTimes.push(tempTravelTime);
            locations.push(tempLocations);
        });
        res.status(200).json({ locations, travelTimes });
    } catch (err) {
        res.status(500).json("error invalid url");
    }
}
