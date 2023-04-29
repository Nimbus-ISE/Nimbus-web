import React, { useEffect } from "react";
import AlternativeItem from "./AlternativeItem";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTab/PlanTabContext";
import addDate from "@/utils/addDate";
import ChevronRightIconRounded from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftIconRounded from "@mui/icons-material/ChevronLeftRounded";
import CloseIcon from "@mui/icons-material/Close";
import fetchLocationDetails from "@/utils/api/fetchLocationDetails";

import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";

const Alternative = () => {
    const {
        isBigScreen,
        alternatives: alternativeOptions,
        currentAlternativeView,
        arrivalAndLeaveTimes,
        fullPlan,
        travelTime,
        trip_params,
        currentFolder,
        selectedLocationIndex,
    }: any = getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
    const plan: any = [];
    const savePlan: any = [];
    const locations: any = [];

    useEffect(() => {
        fullPlan.forEach((day: any, dayIndex: any) => {
            const dayPlan: any = [];
            if (plan.length < fullPlan.length) {
                day.location_data.forEach(
                    (location: any, locationIndex: any) => {
                        if (travelTime[dayIndex][locationIndex]) {
                            dayPlan.push(
                                {
                                    type: "locations",
                                    loc_id: location.loc_id,
                                    arrival_time:
                                        arrivalAndLeaveTimes[dayIndex][
                                            locationIndex
                                        ].arrival_time,
                                    leave_time:
                                        arrivalAndLeaveTimes[dayIndex][
                                            locationIndex
                                        ].leave_time,
                                },
                                travelTime[dayIndex][locationIndex]
                            );
                        } else {
                            dayPlan.push({
                                type: "locations",
                                loc_id: location.loc_id,
                                arrival_time:
                                    arrivalAndLeaveTimes[dayIndex][
                                        locationIndex
                                    ].arrival_time,
                                leave_time:
                                    arrivalAndLeaveTimes[dayIndex][
                                        locationIndex
                                    ].leave_time,
                            });
                        }
                    }
                );
                plan.push(dayPlan);
            }
        });

        savePlan.push({
            day: addDate(trip_params.start_date, Number(currentFolder)),
            loc_id: fullPlan[currentFolder].location_data[selectedLocationIndex]
                .loc_id,
            trip: plan,
        });

        (async () => {
            const response = await fetch("/api/getAlternatives", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(savePlan[0]),
            });

            const result = await response.json();

            const alternatives: any = [];
            const queryLocIds: any = {};
            const travelTimes: any = [];

            result.forEach((day: any, index: any) => {
                const tempResult: any = [];
                const tempTravelTime: any = [];
                day.forEach((point: any) => {
                    if (point.type === "locations") tempResult.push(point);
                    else tempTravelTime.push(point);
                });

                alternatives.push(tempResult[selectedLocationIndex]);
                queryLocIds["day " + index.toString()] = [
                    Number(tempResult[selectedLocationIndex].loc_id),
                ];
                travelTimes.push(tempTravelTime);
            });

            const alternativeLocations: any = await fetchLocationDetails(
                queryLocIds
            );

            alternativeLocations.forEach((day: any) => {
                if (locations.length < alternativeLocations.length)
                    locations.push(...day.location_data);
            });

            dispatch({
                type: "MULTI_SET",
                payload: {
                    property: [
                        "alternatives",
                        "alternative_trips",
                        "alternative_travel_time",
                    ],
                    value: [locations, result, travelTimes],
                },
            });
        })();
    }, []);

    return (
        <>
            <Dialog open={true} maxWidth={"md"} className="largeBorder">
                <button
                    className="absolute right-0 m-3 hover:bg-gray-100 h-8 w-8 p-2 rounded-full duration-300 text-[#45D8D0] text-sm flex justify-center items-center bg-white backdrop-blur-sm bg-opacity-50"
                    onClick={() =>
                        dispatch({
                            type: "SET",
                            payload: {
                                property: "openAlternatives",
                                value: false,
                            },
                        })
                    }
                >
                    <>
                        <CloseIcon sx={{ height: "20px" }} />
                    </>
                </button>
                <div
                    className={
                        isBigScreen
                            ? "shadow-md rounded-xl bg-white p-2 overflow-y-auto overflow-x-hidden"
                            : "shadow-md rounded-xl bg-white p-4 overflow-y-auto overflow-x-hidden scrollbar-hide"
                    }
                >
                    <div className="flex flex-col place-items-center h-full w-full">
                        <div className="text-neutral-700 text-xl text-center font-bold mt-5">
                            Select Alternative
                        </div>
                        {isBigScreen && (
                            <div
                                className={
                                    isBigScreen
                                        ? "grid grid-cols-3 mt-2 m-auto w-full h-full scrollbar-hide"
                                        : "grid grid-cols-1 gap-[5vw] place-items-center overflow-x-scroll h-[35vh] w-[40vw] scrollbar-hide mt-6"
                                }
                            >
                                {alternativeOptions.map(
                                    (location: any, index: any) => (
                                        <AlternativeItem
                                            location={location}
                                            index={index}
                                        />
                                    )
                                )}
                            </div>
                        )}
                        {!isBigScreen && (
                            <div className="pb-5">
                                {currentAlternativeView < 2 && (
                                    <button
                                        onClick={() => {
                                            dispatch({
                                                type: "INCREMENT_ALTERNATIVE",
                                            });
                                        }}
                                    >
                                        <div className="absolute top-[40%] right-2">
                                            <ChevronRightIconRounded fontSize="large" />
                                        </div>
                                    </button>
                                )}
                                {currentAlternativeView !== 0 && (
                                    <button
                                        onClick={() => {
                                            dispatch({
                                                type: "DECREMENT_ALTERNATIVE",
                                            });
                                        }}
                                    >
                                        <div className="absolute top-[40%] left-2">
                                            <ChevronLeftIconRounded fontSize="large" />
                                        </div>
                                    </button>
                                )}
                                <AlternativeItem
                                    location={
                                        alternativeOptions[
                                            currentAlternativeView
                                        ]
                                    }
                                    index={currentAlternativeView}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default Alternative;
