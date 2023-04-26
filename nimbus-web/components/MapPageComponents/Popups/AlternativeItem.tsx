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
                    ? "flex flex-col m-4 place-items-center gap-2 "
                    : "flex flex-col place-items-center gap-2 z-50 mt-4"
            }
        >
            <button
                className={
                    isBigScreen
                        ? " h-[10rem] w-[10rem] rounded-full duration-300 hover:shadow-lg"
                        : " h-[35vw] w-[35vw] rounded-full duration-300 hover:shadow-lg"
                }
            >
                <img
                    src={data.url?.split(",")[0]}
                    className={
                        isBigScreen
                            ? " h-[10rem] w-[10rem] rounded-full duration-300 shadow-md object-cover"
                            : " h-[35vw] w-[35vw] rounded-full duration-300 shadow-md object-cover"
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
            <div className="text-lg text-neutral-800 font-bold mt-2 text-center">
                {data.loc_name}
            </div>

            <Stars rating={data?.rating} size={15} />
            <div className="text-xs lg:text-sm mt-2 w-full px-5">
                {data.description}
            </div>
            <div className="flex w-full h-full justify-center items-end mt-2">
                <button
                    className="hover:bg-gray-100 h-7 w-full p-2 rounded-lg duration-300 top-16 right-10 text-[#45D8D0] text-sm flex justify-center items-center border-[1px] border-[#45D8D0] bg-white backdrop-blur-sm bg-opacity-50 animate-fade-in"
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
        </div>
    );
};

export default AlternativeItem;
