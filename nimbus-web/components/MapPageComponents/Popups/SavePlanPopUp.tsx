import React, { FormEvent, useRef } from "react";
import { getPlanTabState, getPlanTabDispatch } from "../PlanTab/PlanTabContext";
import { useUser } from "@auth0/nextjs-auth0/client";
import getMaxPlans from "@/utils/getMaxPlans";
import { customClaims } from "@/misc";
import { Button, Fade } from "@mui/material";
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
    // const { user, isLoading } = useUser();
    const dispatch: any = getPlanTabDispatch();
    const inputRef: any = useRef(null);
    const [transition, setTransition] = React.useState<boolean>();
    const plan: any = [];
    const savePlan: any = [];
    const user = {
        ...customClaims,
        sub: "",
    };
    const isLoading = false;

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

        console.log("savePlan", user);

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
        if (transition === false)
            setTimeout(() => dispatch({ type: "TOGGLE_SAVE_PLAN" }), 100);
    }, [transition]);

    // return (
    //     <div className="text-neutral-700">
    //         <div
    //             className={
    //                 isBigScreen
    //                     ? "bg-white w-[90] h-[100px] p-2 rounded-xl absolute top-8 left-[36%] text-center text-sm flex flex-col items-center justify-center duration-300"
    //                     : "bg-white w-96 p-2 rounded-lg mt-20 pb-8 text-center text-xl flex flex-col items-center z-100"
    //             }
    //         >
    //             {isBigScreen && (
    //                 <button
    //                     className="hover:bg-gray-100 h-9 w-9 p-2 rounded-lg absolute duration-300 top-1 right-1 text-[#45D8D0] text-sm flex justify-center items-center bg-white backdrop-blur-sm bg-opacity-50"
    //                     onClick={() => {
    //                         dispatch({ type: "TOGGLE_SAVE_PLAN" });
    //                     }}
    //                 >
    //                     <CloseIcon sx={{ height: "20px" }} />
    //                 </button>
    //             )}
    //             <div className="font-bold">Save Plan</div>
    //             <div className="flex items-center p-4 justify-evenly">
    //                 <input
    //                     ref={inputRef}
    //                     placeholder="Enter plan name..."
    //                     className="focus:outline-0 rounded-lg bg-neutral-100 text-netral-700 w-60 h-9 shadow-sm p-2 border-[1px] border-neutral-300"
    //                 />
    //                 <button
    //                     className="hover:opacity-50 h-9 p-2 ml-5 rounded-lg duration-300 top-16 right-10 text-white text-sm flex justify-center items-center bg-[#45D8D0]"

    return isLoading || !user ? null : (
        <>
            <Fade in={transition}>
                <div
                    className={`bg-white p-2 rounded-xl text-center text-xl flex flex-col items-center md:shadow-md
                                        ${
                                            isBigScreen
                                                ? "absolute top-[38vh] py-5 w-96 left-[50vw]"
                                                : "mt-20 pb-8 z-[100] w-full h-full"
                                        }`}
                >
                    <div className="font-bold">Save trip plan</div>

                    <input
                        ref={inputRef}
                        placeholder="Enter plan name..."
                        className="focus:outline-0 rounded-lg bg-neutral-100 text-neutral-700 text-sm my-3 w-60 h-9 shadow-sm p-2 border-[1px] border-neutral-300"
                    />
                    <div className="flex gap-3 w-60 justify-center">
                        <Button
                            onClick={() => {
                                handleClick();

                                dispatch({
                                    type: "SET",
                                    payload: {
                                        property: "openSavePlan",
                                        value: false,
                                    },
                                });
                            }}
                            // >
                            //                  <SaveIcon sx={{ height: "20px" }} />
                            //                 <p>&nbsp;save</p>
                            //             </button>
                            //         </div>
                            //     </div>
                            // </div>
                            variant="contained"
                            style={{
                                backgroundColor: "#00c4cc",
                                borderRadius: "0.5rem",
                                width: "50%",
                            }}
                            startIcon={<SaveIcon sx={{ height: "20px" }} />}
                        >
                            <div className="text-white font-montserrat">
                                <p>save</p>
                            </div>
                        </Button>
                        {isBigScreen ? (
                            <Button
                                onClick={() => {
                                    setTransition(false);
                                }}
                                variant="contained"
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "0.5rem",
                                    width: "50%",
                                }}
                                startIcon={
                                    <CloseIcon
                                        sx={{
                                            height: "20px",
                                            color: "#45D0D8",
                                        }}
                                    />
                                }
                            >
                                <div className="text-[#45D0D8] font-montserrat">
                                    <p>cancel</p>
                                </div>
                            </Button>
                        ) : null}
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SavePlanPopUp;
