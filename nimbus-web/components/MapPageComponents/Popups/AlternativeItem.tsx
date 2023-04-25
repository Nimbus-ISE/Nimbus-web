import React from "react";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTab/PlanTabContext";
import Stars from "@/components/Stars";

const AlternativeItem = (props: any) => {
    const { isBigScreen, currentFolder, selectedLocationIndex }: any =
        getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
    const data = props.location;

    return (
        <div
            className={
                isBigScreen
                    ? "flex flex-col m-4 place-items-center gap-2"
                    : "flex flex-col place-items-center gap-2 z-50 mt-4"
            }
        >
            <button
                className={
                    isBigScreen
                        ? " h-[17vw] w-[17vw] rounded-full hover:scale-105 duration-300"
                        : " h-[35vw] w-[35vw] rounded-fullhover:scale-105 duration-300 "
                }
            >
                <img
                    src={data.url?.split(",")[0]}
                    className={
                        isBigScreen
                            ? " h-[17.5vw] w-[17.5vw] rounded-full hover:scale-105 duration-300"
                            : " h-[35vw] w-[35vw] rounded-full hover:scale-105 duration-300 "
                    }
                    onMouseDown={() => {
                        dispatch({
                            type: "CHANGE_PLAN",
                            payload: {
                                day: currentFolder,
                                oldLocationIndex: selectedLocationIndex,
                                location: data,
                                index: props.index,
                            },
                        });
                        dispatch({
                            type: "SET",
                            payload: {
                                property: "openAlternatives",
                                value: false,
                            },
                        });
                    }}
                />
            </button>
            <div
                className={
                    isBigScreen
                        ? "text-xl font-bold mt-8 text-center"
                        : "text-lg font-bold mt-4 text-center"
                }
            >
                {data.loc_name}
            </div>
            <Stars rating={90} size={20} />
            <div className="text-xs w-44 mt-2">{data.description}</div>
            <button
                className="border-0 bg-[#45d8d0] rounded-full p-2 hover:scale-110  duration-300 z-10"
                onMouseDown={() => {
                    dispatch({
                        type: "MULTI_SET",
                        payload: {
                            property: ["openReview", "placeData"],
                            value: [true, data],
                        },
                    });
                }}
            >
                More
            </button>
        </div>
    );
};

export default AlternativeItem;
