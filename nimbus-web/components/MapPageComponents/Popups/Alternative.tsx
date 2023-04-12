import React from "react";
import AlternativeItem from "./AlternativeItem";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTab/PlanTabContext";

const Alternative = () => {
    const { isBigScreen, alternatives, currentAlternativeView }: any =
        getPlanTabState();
    const dispatch: any = getPlanTabDispatch();

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
                            ? "rounded-xl bg-white h-[70vh] w-[60vw] p-2"
                            : "rounded-xl bg-white h-[45vh] w-[90vw] p-4 mb-14"
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
                                        ? "flex gap-[0.5rem] place-items-center mt-6 "
                                        : "flex flex-row gap-[5vw] place-items-center overflow-x-scroll h-[35vh] w-[40vw] scrollbar-hide mt-6"
                                }
                            >
                                {alternatives.map((location: any) => (
                                    <AlternativeItem location={location} />
                                ))}
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
                                            className="w-20 absolute top-[39vh] right-8"
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
                                            className="w-20 absolute top-[39vh] left-8 rotate-180"
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
