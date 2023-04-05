import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AlternativeItemProps } from "../PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";
import Star from "@/components/Star";

const AlternativeItem = (props: any) => {
    const { isBigScreen, fullPlan, currentFolder, selectedLocationIndex }: any =
        getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
    const changePlan = (day: number, oldLocationIndex: number) => {
        fullPlan[day][oldLocationIndex] = {
            coordinate: [13.7346539, 100.5261501],
            type: "tourist spot",
            "opening hours": [8, 13],
            duration: 72,
            durationH: 1.2,
            name: "Joke Sam Yan",
            loc_id: "44",
            leaveTime: 10.22273878515078,
        };
    };
    return (
        <div
            className={
                isBigScreen
                    ? "flex flex-col m-4 place-items-center gap-2"
                    : "flex flex-col  place-items-center gap-2"
            }
        >
            <button
                className={
                    isBigScreen
                        ? "bg-sky-300 h-[17.5vw] w-[17.5vw] rounded-full hover:scale-110 duration-300"
                        : "bg-sky-300 h-[25vw] w-[25vw] rounded-full hover:scale-110 duration-300 "
                }
                onClick={() => {
                    changePlan(currentFolder, selectedLocationIndex);
                    dispatch({
                        type: "CHANGE_PLAN",
                        payload: {
                            day: currentFolder,
                            oldLocationIndex: selectedLocationIndex,
                        },
                    });
                    dispatch({
                        type: "TOGGLE_ALTERNATIVES",
                    });
                }}
            ></button>
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
