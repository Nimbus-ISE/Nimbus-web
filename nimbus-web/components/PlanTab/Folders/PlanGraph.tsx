import EditIcon from "@mui/icons-material/Edit";
import { PlanGraphProps, PlaceType } from "../PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";
import useMap from "@/hooks/useMap";
const PlanGraph = (props: PlanGraphProps) => {
    const dispatch: any = getPlanTabDispatch();
    const { openFullTab, isClosingFullFolder, currentFolder } =
        getPlanTabState();

    return (
        <div className="flex flex-col items-left  mt-4 bg-white ">
            <div className="ml-4 h-8 w-20 rounded-2xl bg-[#45d8d0] text-center text-white font-extrabold ">
                Day {props.dayNumber}
            </div>
            {props.places?.map((place: PlaceType, index: any) => (
                <>
                    <div className="h-10 w-1 ml-14 bg-[#45d8d0] rounded"></div>
                    <div
                        className="flex flex-row items-center text-xs gap-4 rounded-xl hover:bg-[#efeded] hover:h-32 "

                        // onMouseLeave={() => {
                        //     togglePinState(currentFolder, 999);
                        // }}
                    >
                        <img
                            src={place.imgLink}
                            className={
                                props.clickable
                                    ? "h-28 w-28 rounded-full hover:scale-110 duration-300 cursor-pointer shadow"
                                    : "h-28 w-28 rounded-full shadow"
                            }
                            onMouseDown={() => {
                                dispatch({
                                    type: "TOGGLE_PLACE_DETAILS",
                                    payload: {
                                        placeTitle: place.name,
                                        placeDescription:
                                            place.placeDescription,
                                        address: place.address,
                                        loc_id: place.loc_id,
                                    },
                                });
                            }}
                        />
                        <div className="flex flex-col">
                            <div className="flex gap-4">
                                {place?.name?.length < 20 && (
                                    <div className="text-xl font-extrabold">
                                        {place.name}
                                    </div>
                                )}
                                {place?.name?.length >= 20 && (
                                    <div className="text-lg font-bold">
                                        {place.name}
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

                            <div className="w-64 text-[12px]">
                                opening hours:{" "}
                                {place["opening hours"][0] + " am "}-
                                {" " + place["opening hours"][1] + " pm"}
                            </div>
                            <div className="w-64 text-[12px]">
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
