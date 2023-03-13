import React from "react";
import FolderFullDynamic from "./FolderFullDynamic";
import { testData } from "@/test_data/testData";
import usePlanTab from "@/hooks/usePlanTab";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";
import ClosingFullFolder from "./ClosingFullFolder";

const FullScreenPlan = () => {
    const { currentFolderView, isClosingFullFolder } = getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
    return (
        <>
            {!isClosingFullFolder && <FolderFullDynamic />}
            {isClosingFullFolder && <ClosingFullFolder />}
            {testData.length > 3 && !isClosingFullFolder && (
                <div className="absolute top-0 right-0 w-[8.5rem] h-16  ">
                    <div className="grid  w-[8.5rem] h-16 place-items-center items-center ">
                        <div className="text-center">
                            <button
                                className="text-blue-500 font-extrabold -translate-y-8"
                                onClick={() => {
                                    dispatch({ type: "DECREMENT_FOLDER" });
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    width="20"
                                    height="100"
                                >
                                    <polygon points="0,50 100,0 100,100" />
                                </svg>
                            </button>
                            {/* Day {currentFolderView + 1}-{currentFolderView + 3}{" "} */}

                            <button
                                className="text-blue-500 font-extrabold -translate-y-8 ml-4"
                                onClick={() => {
                                    dispatch({ type: "INCREMENT_FOLDER" });
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    width="20"
                                    height="100"
                                    className="rotate-180 "
                                >
                                    <polygon points="0,50 100,0 100,100" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FullScreenPlan;
