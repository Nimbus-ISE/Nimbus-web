import React from "react";
import FolderFullDynamic from "./FolderFullDynamic";
import { testData } from "@/test_data/testData";
import usePlanTab from "@/hooks/usePlanTab";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";

const FullScreenPlan = () => {
    const { currentFolderView }: any = getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
    return (
        <>
            <FolderFullDynamic />
            {testData.length > 3 && (
                <div className="absolute top-0 right-0 w-[8.5rem] h-16  ">
                    <div className="grid  w-[8.5rem] h-16 place-items-center items-center">
                        <div className="text-center">
                            <button
                                className="text-blue-500 font-extrabold"
                                onClick={() => {
                                    dispatch({ type: "DECREMENT_FOLDER" });
                                }}
                            >
                                {" "}
                                {"<<"}
                            </button>{" "}
                            Day {currentFolderView + 1}-{currentFolderView + 3}{" "}
                            <button
                                className="text-blue-500 font-extrabold"
                                onClick={() => {
                                    dispatch({ type: "INCREMENT_FOLDER" });
                                }}
                            >
                                {" "}
                                {">>"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FullScreenPlan;
