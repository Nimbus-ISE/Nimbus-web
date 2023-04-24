import { useEffect, useState, useRef, useCallback } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
    getPlanTabDispatch,
    getPlanTabState,
} from "@/components/MapPageComponents/PlanTab/PlanTabContext";
import BigScreenPage from "@/components/MapPageComponents/PlanTab/Folders/BigScreenPage";
import SmallScreenPage from "@/components/MapPageComponents/PlanTab/Folders/SmallScreenPage";
import polyline from "@mapbox/polyline";
import sortObject from "@/utils/sortObject";
import { GetServerSidePropsContext } from "next";
import useViewportHeight from "@/hooks/useViewportHeight";
import Loading from "@/components/Loading";

export default function map({ trip_params }: any) {
    const dispatch: any = getPlanTabDispatch();
    const screenSize = useMediaQuery("(min-width:1000px)");
    const { height } = useViewportHeight();
    const { isBigScreen, currentFolder, fullPlan, changed } = getPlanTabState();
    const [isMounted, setIsMounted] = useState(false);
    const [initialized, setInitalized] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    type tripType = {
        [x: string]: any;
        locations: any;
        travelTimes: any;
        arrivalAndLeaveTimes: any;
    };

    const trip_params_object = JSON.parse(trip_params);
    console.log(trip_params_object);

    useEffect(() => {
        dispatch({
            type: "SET_SCREEN_SIZE",
            payload: screenSize,
        });
        if (trip_params_object.name !== undefined) {
            console.log(1);

            dispatch({
                type: "SET_TRIP_PARAMS",
                payload: trip_params_object.trip_params,
            });
        } else {
            console.log(2);
            dispatch({
                type: "SET_TRIP_PARAMS",
                payload: trip_params_object,
            });
        }
    }, [screenSize]);

    useEffect(() => {
        const fetchTrip = async () => {
            const res = await fetch(`/api/getTrip/${trip_params}`);
            const plan = await res.json();
            return plan;
        };
        const fetchLocationDetails = async (loc_ids: string, day: string) => {
            const response = await fetch(
                `/api/getLocationData?loc_ids=${loc_ids}&day=${day}`
            );
            const data = await response.json();
            return data;
        };

        (async () => {
            const loc_ids: any = [];
            let trip: any = [];
            if (trip_params_object.name === undefined) {
                trip = await fetchTrip();
            } else {
                const dayPlans = trip_params_object.day_plan;
                const locIds: any = [];
                const travelTimes: any = [];
                const arrivalAndLeaveTimes: any = [];

                dayPlans.forEach((day: any) => {
                    const tempLocId: any = [];
                    const tempTravelTimes: any = [];
                    const tempArrivalAndLeaveTimes: any = [];
                    day.forEach((node: any, index: any) => {
                        if (node.type === "location") {
                            tempLocId.push(node.loc_id);
                            tempArrivalAndLeaveTimes.push({
                                arrival_time: node.arrival_time,
                                leave_time: node.leave_time,
                            });
                        } else tempTravelTimes.push(node);
                    });
                    locIds.push(tempLocId);
                    travelTimes.push(tempTravelTimes);
                    arrivalAndLeaveTimes.push(tempArrivalAndLeaveTimes);
                });
                trip["locations"] = locIds;
                trip["travelTimes"] = travelTimes;
                trip["arrivalAndLeaveTimes"] = arrivalAndLeaveTimes;
                trip["trip_id"] = trip_params_object.name;
                dispatch({
                    type: "SET_IS_SAVE_PLAN",
                    payload: { trip_name: trip_params_object.name },
                });
            }

            dispatch({
                type: "SET_TRAVEL_TIME",
                payload: trip.travelTimes,
            });
            dispatch({
                type: "SET_ARRIVAL_LEAVE_TIME",
                payload: trip.arrivalAndLeaveTimes,
            });
            dispatch({ type: "SET_TRIP_ID", payload: trip.trip_id });
            const tempPinState: Array<Array<string>> = [];
            trip.locations.forEach((day: any, index: string) => {
                const tempPin: string[] = [];

                day.forEach(() => {
                    tempPin.push("#000");
                });
                if (tempPinState.length < trip.locations.length) {
                    tempPinState.push(tempPin);
                }

                if (loc_ids.length < trip.locations.length) {
                    fetchLocationDetails(
                        `[${[trip.locations[index]].toString()}]`,
                        index
                    ).then(async (result) => {
                        const coordinates: Array<Array<string>> = [];
                        loc_ids.push(await result);
                        const sorted_days = sortObject(loc_ids);
                        const correctlyOrdered: any = [];
                        sorted_days.forEach((day: any, index: any) => {
                            const ordered_loc_ids: any = [];
                            day.location_data?.forEach((point: any) => {
                                const indexOfData = trip.locations[
                                    index
                                ].indexOf(point.loc_id);
                                if (indexOfData >= 0)
                                    ordered_loc_ids[indexOfData] = point;
                            });
                            correctlyOrdered.push({
                                day: index.toString(),
                                location_data: ordered_loc_ids,
                            });
                        });

                        if (!isMounted && !initialized) {
                            dispatch({
                                type: "SET_FULL_PLAN",
                                payload: correctlyOrdered,
                            });
                            setIsMounted(true);
                        }

                        const plan = initialized ? fullPlan : correctlyOrdered;

                        plan.forEach((day: any) => {
                            const tempCoordinates: Array<string> = [];
                            day.location_data?.forEach((loc: any) => {
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
        })().then(() => {
            setIsLoading(false);
        });

        setInitalized(true);
    }, [currentFolder, changed]);

    return (
        <>
            <Head>
                <title>Nimbus</title>
            </Head>
            {isLoading && (
                <div
                    className="flex w-full bg-white text-black"
                    style={{
                        height: height,
                    }}
                >
                    <Loading />
                </div>
            )}
            {!error && !isLoading && (
                <div
                    style={{
                        height: height,
                    }}
                    className="w-[100vw] overflow-hidden"
                >
                    <div
                        style={{
                            height: isBigScreen ? height : undefined,
                        }}
                        className={
                            isBigScreen
                                ? "grid place-items-center z-50 bg-gradient-to-r from-[#21D7E8] to-[#FFDE59] text-black grid-cols-12 absolute w-full overflow-hidden"
                                : "  z-50  bg-gray-300 text-black absolute w-full overflow-hidden gap-0"
                        }
                    >
                        {!isBigScreen && <SmallScreenPage />}

                        {isBigScreen && <BigScreenPage />}
                    </div>
                </div>
            )}
            {error && <div>ERROR</div>}
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const trip_params = params?.trip_params;
    return {
        props: {
            trip_params: typeof trip_params === "string" ? trip_params : "",
        },
    };
}
