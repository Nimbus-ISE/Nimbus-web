import React, { useEffect } from "react";

import FolderSmallDynamic from "./FolderSmallDynamic";

import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";

const SideBar = () => {
    const dispatch: any = getPlanTabDispatch();
    const { openFullTab, isBigScreen } = getPlanTabState();
    return (
        <div className={"col-span-12 h-full z-10 lg:col-span-4"}>
            <FolderSmallDynamic />
            {isBigScreen && (
                <button
                    className="absolute bg-white top-[36vh]   p-2 h-28 rounded-r-xl z-10 left-[33%]"
                    onClick={() => {
                        dispatch({ type: "OPEN_FULL_FOLDER" });
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="10"
                        height="100"
                        className="rotate-180"
                    >
                        <polygon points="0,50 100,0 100,100" />
                    </svg>
                </button>
            )}
            {!isBigScreen && !openFullTab && (
                <div
                    className="absolute bg-black top-12 left-[88vw] z-10 w-10 h-10 text-white text-center font-extrabold text-2xl rounded-full cursor-pointer"
                    onClick={() => {
                        dispatch({ type: "OPEN_FULL_FOLDER" });
                    }}
                >
                    {"∧"}
                </div>
            )}
            {!isBigScreen && openFullTab && (
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
