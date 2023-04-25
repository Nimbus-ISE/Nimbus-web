import {
    Plan,
    TravelDuration,
    Location,
    LocationOrTravelDuration,
} from "@/components/MapPageComponents/PlanTab/PlanTabTypes";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { trip } = req.query;
    try {
        const payload = {
            ...JSON.parse(decodeURIComponent(trip as string)),
        };

        const response = await fetch(
            "http://34.143.131.141:8080/get_trip_mcts",
            {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": "thisisforpip",
                },
            }
        );
        // .then((result: any) => {
        //     console.log(result);
        // })
        // .catch((err: any) => {
        //     console.log(err);
        // });

        const result: any = await response.json();
        // console.log(result);

        const travelTimes: Array<Array<TravelDuration>> = [];
        const locations: Array<Array<number>> = [];
        const arrivalAndLeaveTimes: Array<
            Array<{
                arrival_time: any;
                leave_time: any;
            }>
        > = [];
        result.travel_plan.forEach((day: any) => {
            const tempTravelTime: Array<TravelDuration> = [];
            const tempArrivalAndLeaveTimes: Array<{
                arrival_time: any;
                leave_time: any;
            }> = [];
            const tempLocations: Array<number> = [];
            day.forEach((point: Location | TravelDuration, index: any) => {
                if (index % 2 === 0) {
                    tempLocations.push((point as Location).loc_id);
                    tempArrivalAndLeaveTimes.push({
                        arrival_time: (point as Location).arrival_time,
                        leave_time: (point as Location).leave_time,
                    });
                } else tempTravelTime.push(point as TravelDuration);
            });
            travelTimes.push(tempTravelTime);
            locations.push(tempLocations);
            arrivalAndLeaveTimes.push(tempArrivalAndLeaveTimes);
        });

        res.status(200).json({
            locations,
            travelTimes,
            arrivalAndLeaveTimes,
            trip_id: result.trip_id,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json("error invalid url");
    }
}
