import React, { FormEvent, useRef } from "react";
import { getPlanTabState, getPlanTabDispatch } from "../PlanTab/PlanTabContext";
const SavePlanPopUp = () => {
    const {
        isBigScreen,
        fullPlan,
        arrivalAndLeaveTimes,
        travelTime,
        trip_params,
    } = getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
    const inputRef: any = useRef(null);
    const plan: any = [];
    const savePlan: any = [];

    async function handleClick() {
        const name = inputRef.current.value;
        fullPlan.forEach((day: any, dayIndex: any) => {
            const dayPlan: any = [];
            day.location_data.forEach((location: any, locationIndex: any) => {
                if (travelTime[dayIndex][locationIndex]) {
                    dayPlan.push(
                        {
                            type: "locations",
                            loc_id: location.loc_id,
                            arrival_time:
                                arrivalAndLeaveTimes[dayIndex][locationIndex]
                                    .arrival_time,
                            leave_time:
                                arrivalAndLeaveTimes[dayIndex][locationIndex]
                                    .leave_time,
                        },
                        travelTime[dayIndex][locationIndex]
                    );
                } else {
                    dayPlan.push({
                        type: "locations",
                        loc_id: location.loc_id,
                        arrival_time:
                            arrivalAndLeaveTimes[dayIndex][locationIndex]
                                .arrival_time,
                        leave_time:
                            arrivalAndLeaveTimes[dayIndex][locationIndex]
                                .leave_time,
                    });
                }
            });
            plan.push(dayPlan);
        });

        savePlan.push({
            name: name,
            day_plan: plan,
            trip_params: trip_params,
        });

        await fetch("/api/postSavedPlan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Api-Key": "thisisforpip",
            },
            body: JSON.stringify(savePlan),
        });
    }

    return (
        <>
            {isBigScreen && (
                <button
                    className="bg-black w-10 h-10 rounded-full absolute left-[75vw] top-[35vh] z-10 text-white"
                    onClick={() => {
                        dispatch({
                            type: "TOGGLE",
                            payload: { property: "openSavePlan" },
                        });
                    }}
                >
                    X
                </button>
            )}
            <div
                className={
                    isBigScreen
                        ? "bg-white w-96 p-2 rounded-lg absolute top-[38vh] left-[50vw] text-center text-xl flex flex-col items-center "
                        : "bg-white w-96 p-2 rounded-lg mt-20 pb-8 text-center text-xl flex flex-col items-center z-100"
                }
            >
                <div className="font-bold">Save Plan?</div>

                <input
                    ref={inputRef}
                    placeholder="Enter plan name"
                    className="rounded-full bg-slate-300 text-black m-4 text-center w-80"
                />
                <button
                    className="bg-[#45d8d0] text-black w-20 rounded-full hover:scale-110 duration-300"
                    onClick={() => {
                        handleClick();
                        dispatch({
                            type: "SET",
                            payload: { property: "openSavePlan", value: false },
                        });
                    }}
                >
                    SAVE
                </button>
            </div>
        </>
    );
};

export default SavePlanPopUp;
