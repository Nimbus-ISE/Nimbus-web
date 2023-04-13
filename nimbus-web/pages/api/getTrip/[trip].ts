import {
    Plan,
    TravelDuration,
    Location,
} from "@/components/MapPageComponents/PlanTab/PlanTabTypes";
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

        const response = await fetch(
            "http://34.173.38.122:5000/get_trip_mcts",
            {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": "thisisforpip",
                },
            }
        );

        const result: Plan = await response.json();
        const travelTimes: Array<Array<TravelDuration>> = [];
        const locations: Array<Array<Location>> = [];

        result.forEach((day: any) => {
            const tempTravelTime: Array<TravelDuration> = [];
            const tempLocations: Array<Location> = [];
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
