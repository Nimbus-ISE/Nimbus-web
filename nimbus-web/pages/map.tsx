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

export default function map() {
    const dispatch: any = getPlanTabDispatch();
    const screenSize = useMediaQuery("(min-width:1000px)");
    const { isBigScreen } = getPlanTabState();

    useEffect(() => {
        dispatch({
            type: "SET_SCREEN_SIZE",
            payload: screenSize,
        });
    }, [screenSize]);

    useEffect(() => {
        const fetchTrip = async () => {
            const res = await fetch(`http://localhost:3000/api/getTrip`);
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

            const tempPinState: any[] = [];
            trip.result.forEach((day: any) => {
                const tempPin: any = [];
                const tempLocId: any = [];
                day.forEach((loc: any) => {
                    tempPin.push("#000");
                    tempLocId.push(loc.loc_id);
                });
                if (tempPinState.length < trip.result.length) {
                    tempPinState.push(tempPin);
                }
                if (loc_ids.length < trip.result.length) {
                    fetchLocationDetails(`[${[tempLocId].toString()}]`).then(
                        (result) => {
                            loc_ids.push(result);
                            dispatch({
                                type: "SET_FULL_PLAN",
                                payload: loc_ids,
                            });
                        }
                    );
                }
            });

            // loc_ids.forEach((day: any) => {
            //     fetchLocationDetails(day.toString()).then((result: any) => {
            //         console.log(result);
            //     });
            // });
        })();
    }, []);

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
