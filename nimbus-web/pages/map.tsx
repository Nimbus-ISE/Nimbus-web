import { useEffect, useState, useRef, useCallback } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";

import useMediaQuery from "@/hooks/useMediaQuery";
import {
    getPlanTabDispatch,
    getPlanTabState,
} from "@/components/PlanTab/PlanTabContext";
import BigScreenPage from "@/components/PlanTab/Folders/BigScreenPage";
import SmallScreenPage from "@/components/PlanTab/Folders/SmallScreenPage";
import { useEventCallback } from "@mui/material";
import polyline from "@mapbox/polyline";

export default function map() {
    const dispatch: any = getPlanTabDispatch();
    const screenSize = useMediaQuery("(min-width:1000px)");
    const { isBigScreen, currentFolder } = getPlanTabState();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        dispatch({
            type: "SET_SCREEN_SIZE",
            payload: screenSize,
        });
    }, [screenSize]);

    useEffect(() => {
        const fetchTrip = async () => {
            const res = await fetch(`/api/getTrip`);
            const plan = await res.json();
            return plan;
        };
        const fetchLocationDetails = async (loc_ids: string) => {
            const response = await fetch(
                `/api/getLocationData?loc_ids=${loc_ids}`
            );
            const data = await response.json();
            return data;
        };

        (async () => {
            const loc_ids: any = [];
            const trip = await fetchTrip();

            dispatch({
                type: "SET_TRAVEL_TIME",
                payload: trip.travelTimes,
            });
            const tempPinState: any[] = [];

            trip.locations.forEach((day: any, index: any) => {
                const tempPin: any = [];

                day.forEach(() => {
                    tempPin.push("#000");
                });
                if (tempPinState.length < trip.locations.length) {
                    tempPinState.push(tempPin);
                }

                if (loc_ids.length < trip.locations.length) {
                    fetchLocationDetails(
                        `[${[trip.locations[index]].toString()}]`
                    ).then(async (result) => {
                        const coordinates: any[] = [];

                        loc_ids.push(await result);
                        console.log(`[${[day].toString()}]`);

                        if (!isMounted) {
                            console.log(loc_ids);

                            dispatch({
                                type: "SET_FULL_PLAN",
                                payload: loc_ids,
                            });
                            setIsMounted(true);
                        }
                        console.log(loc_ids);

                        loc_ids.forEach((day: any) => {
                            const tempCoordinates: any = [];
                            day.forEach((loc: any) => {
                                tempCoordinates.push(`[${loc.lat},${loc.lng}]`);
                            });
                            coordinates.push(tempCoordinates);
                        });

                        coordinates.forEach((day: any) => {
                            day.forEach((point: string) => {
                                point.replace(/'/g, '"');
                            });
                        });
                        if (coordinates[currentFolder]) {
                            const response = await fetch(
                                `/api/getRoute?trip=${coordinates[currentFolder]}`
                            );
                            const map_polyline = await response.json();
                            const decoded = polyline.decode(map_polyline);
                            const routeArrs: any = [];
                            decoded.forEach((arr) => {
                                routeArrs.push(arr.reverse());
                            });

                            dispatch({
                                type: "SET_ROUTE",
                                payload: routeArrs,
                            });
                        }
                    });
                }
            });

            // loc_ids.forEach((day: any) => {
            //     fetchLocationDetails(day.toString()).then((result: any) => {
            //         console.log(result);
            //     });
            // });
        })();
    }, [currentFolder]);

    return (
        <>
            <Head>
                <title>Nimbus</title>
            </Head>
            <div className="h-[90vh] w-[100vw] overflow-hidden">
                <div
                    className={
                        isBigScreen
                            ? "grid place-items-center h-[90vh] z-50 bg-gray-300 text-black grid-cols-12 absolute w-full overflow-hidden"
                            : "  h-[92vh] z-50  bg-gray-300 text-black absolute w-full overflow-hidden gap-0"
                    }
                >
                    {!isBigScreen && <SmallScreenPage />}

                    {isBigScreen && <BigScreenPage />}
                </div>
            </div>
        </>
    );
}
