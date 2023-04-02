import React from "react";
import { getPlanTabState, getPlanTabDispatch } from "../PlanTabContext";
const SavePlanPopUp = () => {
    const dispatch: any = getPlanTabDispatch();

    return (
        <>
            <button
                className="bg-black w-10 h-10 rounded-full absolute left-[75vw] top-[36vh] z-10 text-white"
                onClick={() => {
                    dispatch({ type: "TOGGLE_SAVE_PLAN" });
                }}
            >
                X
            </button>
            <div className="bg-white w-96 p-2 rounded-lg absolute top-[38vh] left-[50vw] text-center text-xl flex flex-col items-center ">
                <div className="font-bold">Save Plan?</div>
                <input
                    placeholder="Enter plan name"
                    className="rounded-full bg-slate-300 text-black m-4 text-center w-80"
                />
                <button
                    className="bg-[#45d8d0] text-black w-20 rounded-full hover:scale-110 duration-300"
                    onClick={() => {
                        dispatch({ type: "SAVE_PLAN" });
                    }}
                >
                    SAVE
                </button>
            </div>
        </>
    );
};

export default SavePlanPopUp;
