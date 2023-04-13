import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { trip } = req.query;
    try {
        const payload = {
            trip_pace: "1",
            travel_method: "drive,walk",
            ...JSON.parse(decodeURIComponent(trip as string)),
        };
        console.log(payload);

        const response = await fetch("http://35.188.9.187:5000/get_trip_mcts", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
                "Api-Key": "thisisforpip",
            },
        });
        // const response = await fetch(
        //     "http://35.188.9.187:5000/get_sample_trip"
        // );

        const result = await response.json();
        console.log(result);

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
