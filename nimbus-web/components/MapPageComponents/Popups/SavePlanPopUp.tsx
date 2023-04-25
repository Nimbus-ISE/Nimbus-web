import React, { FormEvent, useRef } from "react";
import { getPlanTabState, getPlanTabDispatch } from "../PlanTab/PlanTabContext";
import { useUser } from "@auth0/nextjs-auth0/client";
import getMaxPlans from "@/utils/getMaxPlans";
import { customClaims } from "@/misc";
import { Button, Fade } from "@mui/material";

const SavePlanPopUp = () => {
    const {
        isBigScreen,
        fullPlan,
        arrivalAndLeaveTimes,
        travelTime,
        trip_params,
    } = getPlanTabState();
    const { user, isLoading } = useUser();
    const dispatch: any = getPlanTabDispatch();
    const inputRef: any = useRef(null);
    const [transition, setTransition] = React.useState<boolean>(false);
    const plan: any = [];
    const savePlan: any = [];
    /*const user = {
        ...customClaims,
        sub: "",
    };
    const isLoading = false;*/

    async function handleClick() {
        const name = inputRef.current.value;
        fullPlan.forEach((day: any, dayIndex: any) => {
            const dayPlan: any = [];
            if (!user) {
                console.log("no user object");
                return;
            }
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

        console.log(savePlan);

        const response = await fetch(`/api/postSavedPlan/${user?.sub}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Api-Key": "thisisforpip",
            },
            body: JSON.stringify(savePlan),
        });
        if (response.ok) {
            alert(
                "Trip plan saved! Access it anytime from your profile page. Enjoy your travels!"
            );
        } else {
            alert("Error saving plan");
        }
    }
    React.useEffect(() => {
        setTransition(true);
        return () => setTransition(false);
    }, []);
    React.useEffect(() => {
        if (!transition)
            setTimeout(() => dispatch({ type: "TOGGLE_SAVE_PLAN" }), 100);
    }, [transition]);

    return isLoading || !user ? null : (
        <>
            <Fade in={transition}>
                <div
                    className={`bg-white p-2 rounded-lg text-center text-xl flex flex-col items-center md:shadow-md
                    ${
                        isBigScreen
                            ? "absolute top-[38vh] py-5 w-96 left-[50vw]"
                            : "mt-20 pb-8 z-[100] w-full"
                    }`}
                >
                    {isBigScreen && (
                        <button
                            className="bg-black w-9 h-9 rounded-full absolute
                            hover:bg-neutral-800 -top-2 -right-2 z-10 text-white"
                            onClick={() => {
                                setTransition(false);
                            }}
                        >
                            x
                        </button>
                    )}
                    <div className="font-bold">Save Plan?</div>

                    <input
                        ref={inputRef}
                        placeholder="Enter plan name"
                        className="rounded-full bg-neutral-100 shadow-sm border-[1px] text-neutral-800 m-4 text-sm py-1.5 text-center w-80"
                    />
                    <Button
                        onClick={() => {
                            handleClick();

                            dispatch({ type: "SAVE_PLAN" });
                        }}
                        variant="contained"
                        style={{
                            backgroundColor: "#00c4cc",
                            borderRadius: "0.5rem",
                        }}
                    >
                        <div className="font-bold text-white w-24 font-montserrat">
                            SAVE
                        </div>
                    </Button>
                </div>
            </Fade>
        </>
    );
};

export default SavePlanPopUp;
