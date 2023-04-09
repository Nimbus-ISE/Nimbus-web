import EditIcon from "@mui/icons-material/Edit";
import { PlanGraphProps, PlaceType } from "../PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";
import backToTopArrow from "../../../../public/backToTopArrow.svg";

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
                    <div
                        className="flex flex-row items-center text-xs rounded-xl hover:bg-[#efeded] "
                        onMouseDown={() => {
                            dispatch({
                                type: "TOGGLE_PLACE_DETAILS",
                                payload: {
                                    place: place,
                                },
                            });
                        }}
                    >
                        <img
                            src={place.url}
                            className={
                                !isBigScreen
                                    ? "h-[30vw] w-[30vw] rounded-full  cursor-pointer shadow bg-fuchsia-500"
                                    : "h-28 w-28 rounded-full shadow"
                            }
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
                                            !isBigScreen
                                                ? "text-[1rem] font-bold ml-4 "
                                                : "text-xl font-bold ml-4"
                                        }
                                    >
                                        {place.loc_name}
                                    </div>
                                )}
                                {place?.loc_name?.length >= 20 && (
                                    <div
                                        className={
                                            !isBigScreen
                                                ? "text-[1rem] font-bold ml-4 text-left"
                                                : "text-xl font-bold ml-4 text-left"
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
                                {/* opening hours:{" "}
                                {place["opening hours"][0] + " am "}-
                                {" " + place["opening hours"][1] + " pm"}
                                <br />
                                Estimate Time of Activty:{" "}
                                {`${Number(place.durationH).toFixed(1)} hrs`} */}
                            </div>
                        </div>
                    </div>

                    {props.travelTimes[index]?.travel_time && (
                        <>
                            <div className="h-10 w-1 ml-14 bg-[#45d8d0]"></div>
                            <div className="flex gap-10 items-center">
                                <div className="h-14 w-14 ml-[1.9rem] bg-white border-[#45d8d0] border-4 rounded-full"></div>
                                <div>
                                    {`Travel Time: ${props.travelTimes[
                                        index
                                    ]?.travel_time.toFixed(0)} minutes`}
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
