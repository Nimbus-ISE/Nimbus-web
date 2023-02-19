import React, { useEffect } from "react";

import FolderSmallDynamic from "./FolderSmallDynamic";
import { SideBarProps } from "./PlanTabTypes";

const SideBar = (props: SideBarProps) => {
    return (
        <div className={"col-span-12 h-full z-10 lg:col-span-4"}>
            <FolderSmallDynamic
                toggleOpenReview={props.toggleOpenReview}
                openAlternatives={props.openAlternatives}
                openFullTab={props.openFullTab}
            />
            {props.isBigScreen && (
                <button
                    className="absolute bg-white top-[35vh]   p-2 h-28 rounded-r-xl z-10 left-[33%]"
                    onClick={props.openTab}
                >
                    {">"}
                </button>
            )}
            {!props.isBigScreen && !props.openFullTab && (
                <button
                    className="absolute bg-white  p-2 z-10 top-[40%] left-[90%] font-extrabold text-2xl"
                    onClick={props.openTab}
                >
                    {"∧"}
                </button>
            )}
            {!props.isBigScreen && props.openFullTab && (
                <button
                    className="absolute bg-white  p-2 z-10 top-[4.5rem] left-[22rem] font-extrabold text-2xl animate-slide-in"
                    onClick={() => {
                        props.closeFullTab();
                    }}
                >
                    {"X"}
                </button>
            )}
        </div>
    );
};

export default SideBar;
