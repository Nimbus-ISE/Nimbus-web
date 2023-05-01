import EditIcon from "@mui/icons-material/Edit";
import { PlanGraphProps, PlaceType } from "../PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";
import capitalizeFirst from "@/utils/capitalizeFirst";
import { useEffect } from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";

const PlanGraph = (props: PlanGraphProps) => {
    const dispatch: any = getPlanTabDispatch();
    const {
        openFullTab,
        isClosingFullFolder,
        isBigScreen,
        travelTime,
        currentFolder,
    } = getPlanTabState();

    useEffect(() => {}, [travelTime]);

    return (
        <div className="flex flex-col items-left bg-white mt-2 pb-10">
            <div
                className={
                    "flex justify-center items-center h-8 w-20 rounded-2xl bg-[#45d8d0] text-center text-white font-bold " +
                    (window.innerWidth < 1024 && window.innerWidth > 500
                        ? "ml-[calc(10vw-2px)]"
                        : !isBigScreen
                        ? "ml-[calc(15vw-38px)]"
                        : "ml-[18px]")
                }
            >
                Day {props.dayNumber}
            </div>
            {props.places?.map((place: any, index: number) => (
                <>
                    <div
                        className={
                            "h-10 w-1 bg-[#45d8d0] " +
                            (window.innerWidth < 1024 && window.innerWidth > 500
                                ? "ml-[calc(10vw+36px-1px)]"
                                : !isBigScreen
                                ? "ml-[calc(15vw-1px)]"
                                : "ml-[calc(56px-1px)]")
                        }
                    ></div>
                    <div className="flex flex-row items-center text-xs rounded-xl hover:bg-[#efeded] duration-300">
                        <img
                            src={place?.url.split(",")[0]}
                            className={
                                "aspect-square rounded-full cursor-pointer shadow-md bg-[#45D0D8] object-cover " +
                                (window.innerWidth < 1024 &&
                                window.innerWidth > 500
                                    ? "h-[20vw] w-[20vw] ml-9"
                                    : !isBigScreen
                                    ? "h-[30vw] w-[30vw]"
                                    : "h-24 w-24 ml-2")
                            }
                            onMouseDown={() => {
                                dispatch({
                                    type: "MULTI_SET",
                                    payload: {
                                        property: ["openReview", "placeData"],
                                        value: [true, place],
                                    },
                                });
                            }}
                        />
                        <div
                            className={
                                isBigScreen
                                    ? "flex flex-col w-full"
                                    : "flex flex-col w-[55vw]"
                            }
                        >
                            <div className="flex justify-between">
                                <div
                                    className={
                                        isBigScreen
                                            ? "text-base text-neutral-800 font-bold ml-4 cursor-pointer text-left pr-2 hover:text-neutral-700 hover:drop-shadow-md"
                                            : "text-lg font-bold text-neutral-800 ml-4 cursor-pointer text-left pr-1 hover:text-neutral-700"
                                    }
                                    onMouseDown={() => {
                                        dispatch({
                                            type: "MULTI_SET",
                                            payload: {
                                                property: [
                                                    "openReview",
                                                    "placeData",
                                                ],
                                                value: [true, place],
                                            },
                                        });
                                    }}
                                >
                                    <div
                                        className={
                                            "lineClamp-2" +
                                            (window.innerWidth > 300
                                                ? ""
                                                : " text-sm")
                                        }
                                    >
                                        {index + 1}) {place.loc_name}
                                    </div>
                                </div>
                                {(!openFullTab || isClosingFullFolder) && (
                                    <div
                                        className={
                                            isBigScreen
                                                ? "relative h-[20px] mr-2"
                                                : "relative h-[20px]"
                                        }
                                    >
                                        <button
                                            className="border-[1px] border-neutral-600 text-neutral-600 hover:text-neutral-400 hover:border-neutral-400 duration-300 rounded-md p-0.5"
                                            onClick={() => {
                                                dispatch({
                                                    type: "MULTI_SET",
                                                    payload: {
                                                        property: [
                                                            "openAlternatives",
                                                            "selectedLocationIndex",
                                                        ],
                                                        value: [true, index],
                                                    },
                                                });
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth",
                                                });
                                            }}
                                        >
                                            <EditIcon fontSize="small" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="text-[12px] text-left ml-4">
                                Arrival Time:{" "}
                                {props.arrivalAndLeaveTimes[
                                    index
                                ].arrival_time.substring(0, 5)}
                                <br />
                                Leave Time:{" "}
                                {props.arrivalAndLeaveTimes[
                                    index
                                ].leave_time.substring(0, 5)}
                            </div>
                        </div>
                    </div>

                    {travelTime[currentFolder][index] && (
                        <>
                            <div
                                className={
                                    "h-10 w-1 bg-[#45d8d0] " +
                                    (window.innerWidth < 1024 &&
                                    window.innerWidth > 500
                                        ? "ml-[calc(10vw+36px-1px)]"
                                        : !isBigScreen
                                        ? "ml-[calc(15vw-1px)]"
                                        : "ml-[calc(56px-1px)]")
                                }
                            ></div>
                            <div className="flex gap-10 items-center mr-2">
                                <div
                                    className={
                                        "flex h-14 w-14 bg-white border-[#45d8d0] border-4 rounded-full text-neutral-800 aspect-square " +
                                        (window.innerWidth < 1024 &&
                                        window.innerWidth > 500
                                            ? "ml-[calc(10vw+36px-27px)]"
                                            : !isBigScreen
                                            ? "ml-[calc(15vw-27px)]"
                                            : "ml-[calc(48px+8px-27px)]")
                                    }
                                >
                                    {travelTime[currentFolder][index]
                                        .travel_type === "walk" && (
                                        <DirectionsWalkRoundedIcon className="m-auto" />
                                    )}
                                    {travelTime[currentFolder][index]
                                        .travel_type === "drive" && (
                                        <DirectionsCarRoundedIcon className="m-auto" />
                                    )}
                                </div>
                                <div
                                    className={
                                        "flex gap-4 text-left " +
                                        (window.innerWidth > 300
                                            ? "text-sm"
                                            : "text-[12px]")
                                    }
                                >
                                    <span className="font-bold text-[#45d8d0] text-left">
                                        {capitalizeFirst(
                                            travelTime[currentFolder][index]
                                                .travel_type
                                        )}
                                    </span>
                                    {travelTime[currentFolder][index]
                                        ?.travel_dur !== 0
                                        ? ` ~ ${
                                              travelTime[currentFolder][index]
                                                  ?.travel_dur > 60
                                                  ? (
                                                        travelTime[
                                                            currentFolder
                                                        ][index]?.travel_dur /
                                                        60
                                                    ).toFixed(1)
                                                  : travelTime[currentFolder][
                                                        index
                                                    ]?.travel_dur
                                          } ${
                                              travelTime[currentFolder][index]
                                                  ?.travel_dur > 60
                                                  ? "minutes "
                                                  : "second"
                                          }`
                                        : "Within walking distance"}
                                </div>
                            </div>
                        </>
                    )}
                </>
            ))}
            {!isBigScreen && (
                <div className="flex w-full justify-center items-center my-4 mt-14">
                    <button
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                        className={`w-20 h-9 transition duration-500 text-xs text-white shadow-md
             bg-neutral-500 backdrop-blur-md rounded-lg z-50 hover:opacity-50`}
                    >
                        <KeyboardArrowUpRoundedIcon />
                    </button>
                </div>
            )}
        </div>
    );
};
export default PlanGraph;
