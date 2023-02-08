import React from "react";

import FolderSmallDynamic from "./FolderSmallDynamic";
import { SideBarProps } from "./PlanTabTypes";

const SideBar = (props: SideBarProps) => {
    return (
        <div className="col-span-12 h-full z-10 lg:col-span-4">
            <FolderSmallDynamic
                toggleOpenReview={props.toggleOpenReview}
                openAlternatives={props.openAlternatives}
            />

            <button
                className="absolute bg-white top-[35vh]   p-2 h-28 rounded-r-xl z-10 hidden lg:block md:left-[60vh] lg:left-[40vh] xl:left-[54vh]   "
                onClick={props.openTab}
            >
                {">"}
            </button>
        </div>
    );
};

export default SideBar;
