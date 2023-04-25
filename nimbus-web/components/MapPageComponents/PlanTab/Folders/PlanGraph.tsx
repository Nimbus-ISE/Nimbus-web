import EditIcon from "@mui/icons-material/Edit";
import { PlanGraphProps, PlaceType } from "../PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";
import capitalizeFirst from "@/utils/capitalizeFirst";
import { useEffect } from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const PlanGraph = (props: PlanGraphProps) => {
    const dispatch: any = getPlanTabDispatch();
    const {
        openFullTab,
        isClosingFullFolder,
        isBigScreen,
        travelTime,
        currentFolder,
    } = getPlanTabState();

    useEffect(() => {
        console.log(travelTime);
    }, [travelTime]);

    return (
        <div className="flex flex-col items-left bg-white mt-2 pb-10">
            <div className="ml-4 h-8 w-20 rounded-2xl bg-[#45d8d0] text-center text-white font-extrabold ">
                Day {props.dayNumber}
            </div>
            {props.places?.map((place: any, index: any) => (
                <>
                    <div className="h-10 w-1 ml-14 bg-[#45d8d0] rounded"></div>
                    <div className="flex flex-row items-center text-xs rounded-xl hover:bg-[#efeded] ">
                        <img
                            src={place?.url.split(",")[0]}
                            className={
                                !isBigScreen
                                    ? "h-[30vw] w-[30vw] rounded-full cursor-pointer shadow-md bg-fuchsia-500"
                                    : "h-24 w-24 rounded-full shadow-md ml-2"
                            }
                            onMouseDown={() => {
                                dispatch({
                                    type: "TOGGLE_PLACE_DETAILS",
                                    payload: {
                                        place: place,
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
                                            ? "text-base text-neutral-800 font-bold ml-4 text-left"
                                            : "text-xl ml-4 text-left"
                                    }
                                >
                                    {place.loc_name}
                                </div>
                                {(!openFullTab || isClosingFullFolder) && (
                                    <div className="relative h-[20px] right-2">
                                        <button
                                            className="border-[1px] border-neutral-600 text-neutral-600 hover:text-neutral-400 hover:border-neutral-400 rounded-md p-0.5"
                                            onClick={async () => {
                                                dispatch({
                                                    type: "TOGGLE_ALTERNATIVES",
                                                    payload: true,
                                                });
                                                dispatch({
                                                    type: "SET_SELECTED_LOCATION_INDEX",
                                                    payload: index,
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
                            <div className="h-10 w-1 ml-14 bg-[#45d8d0]"></div>
                            <div className="flex gap-10 items-center">
                                <div className="flex h-14 w-14 ml-[1.9rem] bg-white border-[#45d8d0] border-4 rounded-full">
                                    {travelTime[currentFolder][index]
                                        .travel_type === "walk" && (
                                        <img
                                            src="/images/WalkingMan.png"
                                            height={"15"}
                                            width={"15"}
                                            className="m-auto"
                                        />
                                    )}
                                    {travelTime[currentFolder][index]
                                        .travel_type === "drive" && (
                                        <img
                                            src="/images/Car.png"
                                            height={"22"}
                                            width={"22"}
                                            className="m-auto"
                                        />
                                    )}
                                </div>
                                <div className="flex gap-4">
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
                            document.body.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                        className={`w-20 h-9 transition duration-500 text-xs text-white shadow-md
             bg-neutral-500 backdrop-blur-md rounded-lg z-50`}
                    >
                        <KeyboardArrowUpRoundedIcon />
                    </button>
                </div>
            )}
        </div>
    );
};
export default PlanGraph;
