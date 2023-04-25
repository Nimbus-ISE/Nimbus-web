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
                        ? " h-[10rem] w-[10rem] rounded-full duration-300"
                        : " h-[35vw] w-[35vw] rounded-full duration-300 "
                }
            >
                <img
                    src={data.url?.split(",")[0]}
                    className={
                        isBigScreen
                            ? " h-[10rem] w-[10rem] rounded-full duration-300 shadow-md"
                            : " h-[35vw] w-[35vw] rounded-full duration-300 shadow-md "
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
                            type: "TOGGLE_ALTERNATIVES",
                            payload: false,
                        });
                    }}
                />
            </button>
            <div className="text-lg text-neutral-800 font-bold mt-2 text-center">
                {data.loc_name}
            </div>
            <Stars rating={4.5} size={15} />
            <div className="text-[0.5rem] w-44 mt-2">{data.description}</div>
            <div className="flex w-full h-full justify-center items-end mt-2">
                <button
                    className="hover:bg-gray-100 h-7 w-full p-2 rounded-lg duration-300 top-16 right-10 text-[#45D8D0] text-sm flex justify-center items-center border-[1px] border-[#45D8D0] bg-white backdrop-blur-sm bg-opacity-50 animate-fade-in"
                    onMouseDown={() => {
                        dispatch({
                            type: "TOGGLE_PLACE_DETAILS",
                            payload: { place: data },
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
