import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AlternativeItemProps } from "../PlanTabTypes";
import { getPlanTabState } from "../PlanTabContext";
import Star from "@/components/Star";

const AlternativeItem = (props: any) => {
    const { isBigScreen }: any = getPlanTabState();
    return (
        <div
            className={
                isBigScreen
                    ? "flex flex-col m-4 place-items-center gap-2"
                    : "flex flex-col  place-items-center gap-2"
            }
        >
            <div
                className={
                    isBigScreen
                        ? "bg-sky-300 h-[17.5vw] w-[17.5vw] rounded-full"
                        : "bg-sky-300 h-[25vw] w-[25vw] rounded-full"
                }
            ></div>
            <div className="text-2xl font-extrabold">{props.title}</div>
            <div className="bg-yellow-300 w-40 h-4">Stars</div>
            <div className="text-xs w-44 mt-2">{props.description}</div>
            <div className="cursor-pointer">
                More
                <ArrowDropDownIcon />
            </div>
        </div>
    );
};

export default AlternativeItem;
