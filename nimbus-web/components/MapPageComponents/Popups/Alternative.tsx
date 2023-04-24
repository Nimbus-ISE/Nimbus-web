import React, { useEffect } from "react";
import AlternativeItem from "./AlternativeItem";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTab/PlanTabContext";
import addDate from "@/utils/addDate";

const Alternative = () => {
    const {
        isBigScreen,
        alternatives,
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

    const fetchLocationDetails = async (loc_ids: string, day: string) => {
        const response = await fetch(
            `/api/getLocationData?loc_ids=${loc_ids}&day=${day}`
        );
        const data = await response.json();
        return data;
    };
    console.log(trip_params);

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
        console.log(
            fullPlan[currentFolder].location_data[selectedLocationIndex].loc_id
        );

        (async () => {
            const response = await fetch("/api/getAlternatives", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(savePlan[0]),
            });
            console.log(response);

            const result = await response.json();

            const alternatives: any = [];
            const queryLocIds: any = [];
            const travelTimes: any = [];

            result.forEach((day: any) => {
                const tempResult: any = [];
                const tempTravelTime: any = [];
                day.forEach((point: any) => {
                    if (point.type === "locations") tempResult.push(point);
                    else tempTravelTime.push(point);
                });

                alternatives.push(tempResult[selectedLocationIndex]);
                queryLocIds.push(tempResult[selectedLocationIndex].loc_id);
                travelTimes.push(tempTravelTime);
            });
            console.log(travelTimes);

            const alternativeLocations: any = await fetchLocationDetails(
                `[${queryLocIds.toString()}]`,
                currentFolder
            );

            const ordered_loc_ids: any = [];
            const correctly_ordered = [];
            alternativeLocations.location_data?.forEach((point: any) => {
                const indexOfData = queryLocIds.indexOf(
                    point.loc_id.toString()
                );

                if (indexOfData >= 0) ordered_loc_ids[indexOfData] = point;
            });
            correctly_ordered.push({
                day: currentFolder.toString(),
                location_data: ordered_loc_ids,
            });

            console.log(correctly_ordered);

            dispatch({
                type: "SET_ALTERNATIVES",
                payload: {
                    locations: correctly_ordered[0].location_data,
                    trips: result,
                    travelTime: travelTimes,
                },
            });
        })();
    }, []);

    return (
        <>
            {isBigScreen && (
                <div
                    className={
                        "bg-black rounded-full w-10 h-10 text-center text-white absolute flex items-center top-[17.5vh] left-[62vw] z-50 cursor-pointer"
                    }
                    onMouseDown={() => {
                        dispatch({
                            type: "TOGGLE_ALTERNATIVES",
                        });
                    }}
                >
                    <div className="ml-4">x</div>
                </div>
            )}
            <div
                className={
                    isBigScreen
                        ? "absolute top-[50vh] left-1/3  -translate-x-1/2 -translate-y-[30vh]  overflow-y-scroll scrollbar-hide  animate-fade-in "
                        : " absolute  top-[35vh] left-1/2  -translate-x-1/2 -translate-y-1/2 overflow-y-scroll  scrollbar-hide  animate-fade-in z-50"
                }
            >
                <div
                    className={
                        isBigScreen
                            ? "rounded-xl bg-white h-[70vh] w-[60vw] p-2 overflow-y-scroll overflow-x-hidden"
                            : "rounded-xl bg-white h-[45vh] w-[90vw] p-4 mb-14 overflow-y-scroll overflow-x-hidden"
                    }
                >
                    <div className="flex flex-col place-items-center ">
                        <div className="text-2xl text-center font-extrabold text-[#a6a6a6]">
                            Alternatives
                        </div>
                        {isBigScreen && (
                            <div
                                className={
                                    isBigScreen
                                        ? "flex gap-[0.5rem]  mt-6 "
                                        : "flex flex-row gap-[5vw] place-items-center overflow-x-scroll h-[35vh] w-[40vw] scrollbar-hide mt-6"
                                }
                            >
                                {alternatives.map(
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
                            <>
                                {currentAlternativeView < 2 && (
                                    <button
                                        onClick={() => {
                                            dispatch({
                                                type: "INCREMENT_ALTERNATIVE",
                                            });
                                        }}
                                    >
                                        <img
                                            src="/images/Arrow_right.png"
                                            className="w-16 absolute top-[35vh] right-2 rotate-90"
                                        />
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
                                        <img
                                            src="/images/Arrow_right.png"
                                            className="w-16 absolute top-[35vh] left-2 -rotate-90"
                                        />
                                    </button>
                                )}
                                <AlternativeItem
                                    location={
                                        alternatives[currentAlternativeView]
                                    }
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Alternative;
