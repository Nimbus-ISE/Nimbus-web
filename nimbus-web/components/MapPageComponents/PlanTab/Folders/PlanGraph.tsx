import EditIcon from "@mui/icons-material/Edit";
import { PlanGraphProps, PlaceType } from "../PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";
import capitalizeFirst from "@/utils/capitalizeFirst";

const PlanGraph = (props: PlanGraphProps) => {
    const dispatch: any = getPlanTabDispatch();
    const { openFullTab, isClosingFullFolder, isBigScreen } = getPlanTabState();

    return (
        <div className="flex flex-col items-left  mt-4 bg-white ">
            <div className="ml-4 h-8 w-20 rounded-2xl bg-[#45d8d0] text-center text-white font-extrabold ">
                Day {props.dayNumber}
            </div>
            {props.places?.map((place: any, index: any) => (
                <>
                    <div className="h-10 w-1 ml-14 bg-[#45d8d0] rounded"></div>
                    <div className="flex flex-row items-center text-xs rounded-xl hover:bg-[#efeded] ">
                        <img
                            src={place?.url}
                            className={
                                !isBigScreen
                                    ? "h-[30vw] w-[30vw] rounded-full cursor-pointer shadow bg-fuchsia-500"
                                    : "h-24 w-24 rounded-full shadow ml-2"
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
                                    ? "flex flex-col "
                                    : "flex flex-col w-[55vw]"
                            }
                        >
                            <div className="flex gap-2">
                                {place?.loc_name?.length < 20 && (
                                    <div
                                        className={
                                            isBigScreen
                                                ? "text-base font-bold ml-4 "
                                                : "text-xl  ml-4"
                                        }
                                    >
                                        {place.loc_name}
                                    </div>
                                )}
                                {place?.loc_name?.length >= 20 && (
                                    <div
                                        className={
                                            isBigScreen
                                                ? "text-base  font-bold ml-4 text-left"
                                                : "text-xl ml-4 text-left"
                                        }
                                    >
                                        {place.loc_name}
                                    </div>
                                )}
                                {(!openFullTab || isClosingFullFolder) && (
                                    <button
                                        onClick={() => {
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
                                        <EditIcon />
                                    </button>
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

                    {props.travelTimes[index] && (
                        <>
                            <div className="h-10 w-1 ml-14 bg-[#45d8d0]"></div>
                            <div className="flex gap-10 items-center">
                                <div className="h-14 w-14 ml-[1.9rem] bg-white border-[#45d8d0] border-4 rounded-full">
                                    {props.travelTimes[index].travel_type ===
                                        "walk" && (
                                        <img
                                            src="/images/WalkingMan.png"
                                            height={"23"}
                                            width={"23"}
                                            className="ml-3 mt-1"
                                        />
                                    )}
                                    {props.travelTimes[index].travel_type ===
                                        "drive" && (
                                        <img
                                            src="/images/Car.png"
                                            height={"36"}
                                            width={"36"}
                                            className="ml-[0.4rem] mt-2"
                                        />
                                    )}
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-bold text-[#45d8d0] text-left">
                                        {capitalizeFirst(
                                            props.travelTimes[index].travel_type
                                        )}
                                    </span>
                                    {props.travelTimes[index]?.travel_dur !== 0
                                        ? ` ~ ${
                                              props.travelTimes[index]
                                                  ?.travel_dur > 60
                                                  ? (
                                                        props.travelTimes[index]
                                                            ?.travel_dur / 60
                                                    ).toFixed(1)
                                                  : props.travelTimes[index]
                                                        ?.travel_dur
                                          } ${
                                              props.travelTimes[index]
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
                <button
                    onClick={() => {
                        document.body.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <img
                        src={"/backToTopArrow.svg"}
                        width={150}
                        className="mt-10 ml-[25vw]"
                    />
                </button>
            )}
        </div>
    );
};
export default PlanGraph;
