import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AlternativeItemProps } from "../PlanTab/PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTab/PlanTabContext";
import Stars from "@/components/Stars";

const AlternativeItem = (props: any) => {
    console.log(props.location);

    const { isBigScreen, currentFolder, selectedLocationIndex }: any =
        getPlanTabState();
    const dispatch: any = getPlanTabDispatch();

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
                        ? " h-[17vw] w-[17vw] rounded-full hover:scale-105 duration-300"
                        : " h-[25vw] w-[25vw] rounded-full "
                }
                onClick={() => {
                    dispatch({
                        type: "CHANGE_PLAN",
                        payload: {
                            day: currentFolder,
                            oldLocationIndex: selectedLocationIndex,
                            location: props.location,
                        },
                    });
                    dispatch({
                        type: "TOGGLE_ALTERNATIVES",
                    });
                }}
            >
                <img
                    src={props.location.url}
                    className={
                        isBigScreen
                            ? " h-[17.5vw] w-[17.5vw] rounded-full hover:scale-110 duration-300"
                            : " h-[25vw] w-[25vw] rounded-full hover:scale-110 duration-300 "
                    }
                />
            </button>
            <div
                className={
                    isBigScreen
                        ? "text-xl font-bold mt-8 text-center"
                        : "text-lg font-bold mt-4 text-center"
                }
            >
                {props.location.loc_name}
            </div>
            <Stars rating={90} size={20} />
            <div className="text-xs w-44 mt-2">
                {props.location.description}
            </div>
            <button
                className="border-0 bg-[#45d8d0] rounded-full p-2 hover:scale-110  duration-300"
                onClick={() => {
                    dispatch({
                        type: "TOGGLE_PLACE_DETAILS",
                        payload: { place: props.location },
                    });
                }}
            >
                More
            </button>
        </div>
    );
};

export default AlternativeItem;
