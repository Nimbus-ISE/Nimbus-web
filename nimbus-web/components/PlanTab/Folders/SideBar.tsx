import React, { useEffect } from "react";

import FolderSmallDynamic from "./FolderSmallDynamic";

import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";

const SideBar = (props: any) => {
    const dispatch: any = getPlanTabDispatch();
    const { openFullTab }: any = getPlanTabState();
    return (
        <div className={"col-span-12 h-full z-10 lg:col-span-4"}>
            <FolderSmallDynamic />
            {props.isBigScreen && (
                <button
                    className="absolute bg-white top-[35vh]   p-2 h-28 rounded-r-xl z-10 left-[33%]"
                    onClick={() => {
                        dispatch({ type: "OPEN_FULL_FOLDER" });
                    }}
                >
                    {">"}
                </button>
            )}
            {!props.isBigScreen && !openFullTab && (
                <button
                    className="absolute bg-white  p-2 z-10 top-[40%] left-[90%] font-extrabold text-2xl"
                    onClick={() => {
                        dispatch({ type: "OPEN_FULL_FOLDER" });
                    }}
                >
                    {"∧"}
                </button>
            )}
            {!props.isBigScreen && openFullTab && (
                <button
                    className="absolute bg-white  p-2 z-10 top-[10%] left-[90%] font-extrabold text-2xl animate-slide-in"
                    onClick={() => {
                        dispatch({ type: "CLOSE_FULL_FOLDER" });
                    }}
                >
                    {"X"}
                </button>
            )}
        </div>
    );
};

export default SideBar;
