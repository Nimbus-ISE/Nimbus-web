import React from "react";
import AlternativeItem from "./AlternativeItem";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTab/PlanTabContext";

const Alternative = () => {
    const { isBigScreen }: any = getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
    return (
        <>
            <div
                className={
                    isBigScreen
                        ? "bg-black rounded-full w-10 h-10 text-center text-white absolute flex items-center top-[20vh] left-[61vw] z-50 cursor-pointer"
                        : "bg-black rounded-full w-10 h-10 text-center text-white absolute flex items-center -top-4 left-[90vw]  z-50 cursor-pointer "
                }
                onMouseDown={() => {
                    dispatch({ type: "TOGGLE_ALTERNATIVES" });
                }}
            >
                <div className="ml-4">x</div>
            </div>
            <div
                className={
                    isBigScreen
                        ? "absolute top-[50vh] left-1/3  -translate-x-1/2 -translate-y-1/2  overflow-y-scroll scrollbar-hide  animate-fade-in "
                        : " absolute  top-[40vh] left-1/2  -translate-x-1/2 -translate-y-1/2 overflow-y-scroll  scrollbar-hide  animate-fade-in"
                }
            >
                <div className="rounded-xl bg-white h-[60%] w-[60vw] p-2">
                    <div className="flex flex-col place-items-center ">
                        <div className="text-2xl text-center font-extrabold text-[#a6a6a6]">
                            Alternatives
                        </div>
                        <div
                            className={
                                isBigScreen
                                    ? "flex gap-[0.5rem] place-items-center "
                                    : "flex flex-col gap-[5vw] place-items-center overflow-y-scroll h-[35vh] scrollbar-hide"
                            }
                        >
                            <AlternativeItem
                                title="title"
                                description="lorem ipsum"
                            />
                            <AlternativeItem
                                title="title"
                                description="lorem ipsum"
                            />
                            <AlternativeItem
                                title="title"
                                description="lorem ipsum"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Alternative;
