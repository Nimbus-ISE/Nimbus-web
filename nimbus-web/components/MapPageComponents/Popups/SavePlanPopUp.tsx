import React, { FormEvent, useRef } from "react";
import { getPlanTabState, getPlanTabDispatch } from "../PlanTab/PlanTabContext";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

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
        <div className="text-neutral-700">
            <div
                className={
                    isBigScreen
                        ? "bg-white w-[90] h-[100px] p-2 rounded-xl absolute top-8 left-[36%] text-center text-sm flex flex-col items-center justify-center duration-300"
                        : "bg-white w-96 p-2 rounded-lg mt-20 pb-8 text-center text-xl flex flex-col items-center z-100"
                }
            >
                {isBigScreen && (
                    <button
                        className="hover:bg-gray-100 h-9 w-9 p-2 rounded-lg absolute duration-300 top-1 right-1 text-[#45D8D0] text-sm flex justify-center items-center bg-white backdrop-blur-sm bg-opacity-50"
                        onClick={() => {
                            dispatch({ type: "TOGGLE_SAVE_PLAN" });
                        }}
                    >
                        <CloseIcon sx={{ height: "20px" }} />
                    </button>
                )}
                <div className="font-bold">Save Plan</div>
                <div className="flex items-center p-4 justify-evenly">
                    <input
                        ref={inputRef}
                        placeholder="Enter plan name..."
                        className="focus:outline-0 rounded-lg bg-neutral-100 text-netral-700 w-60 h-9 shadow-sm p-2 border-[1px] border-neutral-300"
                    />
                    <button
                        className="hover:opacity-50 h-9 p-2 ml-5 rounded-lg duration-300 top-16 right-10 text-white text-sm flex justify-center items-center bg-[#45D8D0]"
                        onClick={() => {
                            handleClick();

                            dispatch({ type: "SAVE_PLAN" });
                        }}
                    >
                        <SaveIcon sx={{ height: "20px" }} />
                        <p>&nbsp;save</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SavePlanPopUp;
