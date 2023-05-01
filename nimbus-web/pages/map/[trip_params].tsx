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
import fetchLocationDetails from "@/utils/api/fetchLocationDetails";

export default function map({ trip_params }: any) {
    const dispatch: any = getPlanTabDispatch();
    const screenSize = useMediaQuery("(min-width:1024px)");
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

    useEffect(() => {
        console.log(trip_params_object);
        if (trip_params_object.name !== undefined) {
            dispatch({
                type: "MULTI_SET",
                payload: {
                    property: ["isBigScreen", "trip_params"],
                    value: [screenSize, trip_params_object.trip_params],
                },
            });
        } else {
            dispatch({
                type: "MULTI_SET",
                payload: {
                    property: ["isBigScreen", "trip_params"],
                    value: [screenSize, trip_params_object],
                },
            });
        }
    }, [screenSize]);

    useEffect(() => {
        const fetchTrip = async () => {
            const res = await fetch(`/api/getTrip/${trip_params}`);
            const plan = await res.json();
            return plan;
        };

        (async () => {
            const loc_ids: any = [];
            let trip: any = [];
            if (trip_params_object.name === undefined) {
                trip = await fetchTrip();
                console.log(trip);
            } else {
                const dayPlans = trip_params_object.day_plan;
                const locIds: any = [];
                const travelTimes: any = [];
                const arrivalAndLeaveTimes: any = [];

                dayPlans?.forEach((day: any) => {
                    const tempLocId: any = [];
                    const tempTravelTimes: any = [];
                    const tempArrivalAndLeaveTimes: any = [];
                    day?.forEach((node: any, index: any) => {
                        if (node.type === "locations") {
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
                /*dispatch({
                    type: "MULTI_SET",
                    payload: {
                        property: ["trip_name", "isSavePlan"],
                        value: [trip_params_object.name, true],
                    },
                });*/
            }
            const dispatchObj: any = {
                type: "MULTI_SET",
                payload: {
                    property: [],
                    value: [],
                },
            };
            if (!initialized) {
                const property: any = [
                    "travelTime",
                    "arrivalAndLeaveTimes",
                    "trip_id",
                ];
                const value: any = [
                    trip.travelTimes,
                    trip.arrivalAndLeaveTimes,
                    trip.trip_id,
                ];
                dispatchObj.payload.property =
                    dispatchObj.payload.property.concat(property);
                dispatchObj.payload.value =
                    dispatchObj.payload.value.concat(value);
            } else {
                const property: any = ["arrivalAndLeaveTimes", "trip_id"];
                const value: any = [trip.arrivalAndLeaveTimes, trip.trip_id];
                dispatchObj.payload.property =
                    dispatchObj.payload.property.concat(property);
                dispatchObj.payload.value =
                    dispatchObj.payload.value.concat(value);
            }

            dispatch(dispatchObj);

            const tempPinState: Array<Array<string>> = [];
            const getLocationDetailObject: any = {};
            trip.locations?.forEach((day: any) => {
                const tempPin: string[] = [];

                day?.forEach(() => {
                    tempPin.push("#000");
                });
                if (tempPinState.length < trip.locations.length) {
                    tempPinState.push(tempPin);
                }

                trip.locations.forEach((day: any, index: any) => {
                    getLocationDetailObject["day " + index.toString()] = day;
                });
            });

            fetchLocationDetails(getLocationDetailObject).then(
                async (result) => {
                    const coordinates: Array<Array<string>> = [];
                    console.log(result);

                    if (!isMounted && !initialized) {
                        dispatch({
                            type: "MULTI_SET",
                            payload: {
                                property: ["fullPlan", "initialCoordinates"],
                                value: [result, []],
                            },
                        });

                        setIsMounted(true);
                    }
                    const plan = initialized ? fullPlan : result;
                    plan?.forEach((day: any) => {
                        const tempCoordinates: Array<string> = [];
                        day.location_data?.forEach((loc: any) => {
                            tempCoordinates.push(`[${loc.lat},${loc.lng}]`);
                        });
                        coordinates.push(tempCoordinates);
                    });

                    coordinates?.forEach((day: any) => {
                        day?.forEach((point: string) => {
                            point.replace(/'/g, '"');
                        });
                    });

                    if (coordinates[currentFolder].length > 0) {
                        const response = await fetch(
                            `/api/getRoute?trip=${coordinates[currentFolder]}`
                        );
                        const map_polyline = await response.json();

                        const decoded = polyline.decode(map_polyline);
                        const routeArrs: any = [];
                        decoded?.forEach((arr) => {
                            routeArrs.push(arr.reverse());
                        });

                        dispatch({
                            type: "SET",
                            payload: {
                                property: "map_polyline",
                                value: routeArrs,
                            },
                        });
                    }
                }
            );
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
                    className="flex w-full bg-white text-neutral-800"
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
                        className={`
                            ${
                                isBigScreen
                                    ? "grid place-items-center z-50 bg-gradient-to-r from-[#21D7E8] to-[#FFDE59] text-neutral-800 grid-cols-12 absolute w-full overflow-hidden"
                                    : "z-50 bg-[#64caca] text-neutral-800 absolute w-full overflow-hidden gap-0"
                            }
                        `}
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
