import EditIcon from "@mui/icons-material/Edit";
import { PlanGraphProps, PlaceType } from "../PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";
import useMap from "@/hooks/useMap";
const PlanGraph = (props: PlanGraphProps) => {
    const dispatch: any = getPlanTabDispatch();
    const { openFullTab, isClosingFullFolder, currentFolder, isBigScreen } =
        getPlanTabState();
    console.log(props.places);

    return (
        <div className="flex flex-col items-left  mt-4 bg-white ">
            <div className="ml-4 h-8 w-20 rounded-2xl bg-[#45d8d0] text-center text-white font-extrabold ">
                Day {props.dayNumber}
            </div>
            {props.places?.map((place: PlaceType, index: any) => (
                <>
                    <div className="h-10 w-1 ml-14 bg-[#45d8d0] rounded"></div>
                    <div
                        className="flex flex-row items-center text-xs  rounded-xl hover:bg-[#efeded] hover:h-32 "

                        // onMouseLeave={() => {
                        //     togglePinState(currentFolder, 999);
                        // }}
                    >
                        <img
                            src={place.imgLink}
                            className={
                                !isBigScreen
                                    ? "h-[30vw] w-[30vw] rounded-full hover:scale-110 duration-300 cursor-pointer shadow"
                                    : "h-28 w-28 rounded-full shadow"
                            }
                            onMouseDown={() => {
                                dispatch({
                                    type: "TOGGLE_PLACE_DETAILS",
                                    payload: {
                                        loc_id: place.loc_id,
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
                            <div className="flex gap-4">
                                {place?.name?.length < 20 && (
                                    <div
                                        className={
                                            !isBigScreen
                                                ? "text-[1rem] font-bold ml-4"
                                                : "text-xl font-bold ml-4"
                                        }
                                    >
                                        {place.name}
                                    </div>
                                )}
                                {place?.name?.length >= 20 && (
                                    <div
                                        className={
                                            !isBigScreen
                                                ? "text-[1rem] font-bold ml-4"
                                                : "text-xl font-bold ml-4"
                                        }
                                    >
                                        {place.name.substring(0, 10) + "..."}
                                    </div>
                                )}
                                {(!openFullTab || isClosingFullFolder) && (
                                    <button
                                        onClick={() => {
                                            dispatch({
                                                type: "TOGGLE_ALTERNATIVES",
                                            });
                                        }}
                                    >
                                        <EditIcon />
                                    </button>
                                )}
                            </div>

                            <div className="text-[12px] text-left ml-4">
                                opening hours:{" "}
                                {place["opening hours"][0] + " am "}-
                                {" " + place["opening hours"][1] + " pm"}
                                <br />
                                Estimate Time of Activty:{" "}
                                {`${Number(place.durationH).toFixed(1)} hrs`}
                            </div>
                        </div>
                    </div>

                    <div className="h-10 w-1 ml-14 bg-[#45d8d0]"></div>
                    <div className="flex gap-10 items-center">
                        <div className="h-14 w-14 ml-[1.9rem] bg-white border-[#45d8d0] border-4 rounded-full"></div>
                        <div>10 minutes</div>
                    </div>
                </>
            ))}
        </div>
    );
};
export default PlanGraph;
