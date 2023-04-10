import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const data = {
            start_date: "2023-02-20T00:00:00",
            end_date: "2023-02-23T00:00:00",
            tags: "zoo,road",
            budget: 3,
        };

        const response = await fetch(
            "http://34.28.125.106:5000/get_trip_mcts",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": "thisisforpip",
                },
            }
        );
        // .then((response) => response.json())
        // .then((data) => console.log(data))
        // .catch((error) => console.error(error));
        // const response = await fetch(
        //     "http://34.28.125.106:5000/get_sample_trip"
        // );

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
