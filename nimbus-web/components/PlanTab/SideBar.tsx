import React from "react";
import FolderSmall from "./FolderSmall";
import FolderSmallDynamic from "./FolderSmallDynamic";

interface IProps {
    toggleOpenReview: any;
    openTab: any;
}
const SideBar = (props: IProps) => {
    return (
        <div className="col-span-4 h-full z-10">
            <FolderSmallDynamic toggleOpenReview={props.toggleOpenReview} />
            <button
                className="absolute bg-white top-[20rem] left-[29.5rem] p-2 h-28 rounded-r-xl z-10 "
                onClick={props.openTab}
            >
                {">"}
            </button>
        </div>
    );
};

export default SideBar;
