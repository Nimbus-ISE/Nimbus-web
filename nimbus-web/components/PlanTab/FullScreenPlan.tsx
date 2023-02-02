import React from "react";
import FolderFull from "./FolderFull";
import FolderFullDynamic from "./FolderFullDynamic";
interface IProps {
    openFullTab: any;
    closeFullTab: any;
}

const FullScreenPlan = (props: IProps) => {
    return (
        <>
            <FolderFullDynamic
                expand={props.openFullTab}
                onClose={props.closeFullTab}
            />
            <div className="absolute top-0 right-0 w-[8.5rem] h-16  ">
                <div className="grid  w-[8.5rem] h-16 place-items-center items-center">
                    <div className="text-center">
                        <button className="text-blue-500 font-extrabold">
                            {" "}
                            {"<<"}
                        </button>{" "}
                        Day 1-3{" "}
                        <button className="text-blue-500 font-extrabold">
                            {" "}
                            {">>"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FullScreenPlan;
