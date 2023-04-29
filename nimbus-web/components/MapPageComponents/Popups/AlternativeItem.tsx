import React from "react";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTab/PlanTabContext";
import Stars from "@/components/Stars";
import { Button } from "@mui/material";

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
                    : "flex flex-col place-items-center gap-2 z-50 "
            }
        >
            <button
                // className={
                //     isBigScreen
                //         ? " h-[9rem] w-[9rem] rounded-full duration-300"
                //         : " h-[35vw] w-[35vw] rounded-full duration-300"
                // }
                className={
                    "rounded-full duration-300 " +
                    (window.innerWidth < 1024 && window.innerWidth > 500
                        ? "h-[20vw] w-[20vw]"
                        : !isBigScreen
                        ? "h-[35vw] w-[35vw]"
                        : "h-[9rem] w-[9rem]")
                }
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
                <img
                    src={data.url?.split(",")[0]}
                    // className={
                    //     isBigScreen
                    //         ? " h-[9rem] w-[9rem] rounded-full duration-300 shadow-md object-cover"
                    //         : " h-[35vw] w-[35vw] rounded-full duration-300 shadow-md object-cover"
                    // }
                    className={
                        "aspect-square rounded-full cursor-pointer duration-300 shadow-md bg-[#45D0D8] object-cover " +
                        (window.innerWidth < 1024 && window.innerWidth > 500
                            ? "h-[20vw] w-[20vw]"
                            : !isBigScreen
                            ? "h-[35vw] w-[35vw]"
                            : "h-[9rem] w-[9rem]")
                    }
                />
            </button>
            <div className="text-lg text-neutral-800 font-bold mt-2 text-center">
                {data.loc_name}
            </div>

            <Stars rating={data?.rating} size={15} />
            <div className="text-[12px] mt-2 w-[90%] max-w-[20rem]">
                {data.description}
            </div>
            <div className="flex flex-col w-full max-w-[15rem] h-full justify-between items-end mt-2 z-[11] mb-5">
                <div />
                <div className="w-full flex flex-col gap-3">
                    <Button
                        onClick={() => {
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
                        variant="contained"
                        style={{
                            backgroundColor: "#00c4cc",
                            borderRadius: "0.5rem",
                            width: "100%",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <div className="text-white font-montserrat">
                            <p>SELECT</p>
                        </div>
                    </Button>
                    <button
                        className="hover:shadow-md h-9 w-full p-2 rounded-lg duration-300 top-16 right-10 text-[#45D8D0] text-sm flex justify-center 
                    items-center border-[1px] border-[#45D8D0] bg-white animate-fade-in mx-auto"
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
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlternativeItem;
