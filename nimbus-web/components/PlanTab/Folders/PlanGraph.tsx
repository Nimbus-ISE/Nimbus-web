import EditIcon from "@mui/icons-material/Edit";
import { PlanGraphProps, PlaceType } from "../PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";
const PlanGraph = (props: PlanGraphProps) => {
    const dispatch: any = getPlanTabDispatch();
    const { openFullTab } = getPlanTabState();
    return (
        <div className="flex flex-col items-left  mt-4 bg-white ">
            <div className="ml-4 h-8 w-20 rounded-2xl bg-[#45d8d0] text-center text-white font-extrabold ">
                Day {props.dayNumber}
            </div>
            {props.places?.map((place: PlaceType) => (
                <>
                    <div className="h-10 w-1 ml-14 bg-[#45d8d0] rounded"></div>
                    <div className="flex flex-row items-center text-xs gap-4 rounded-xl hover:bg-[#efeded] hover:h-32 ">
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
                                        placeTitle: place.placeTitle,
                                        placeDescription:
                                            place.placeDescription,
                                        address: place.address,
                                    },
                                });
                            }}
                        />
                        <div className="flex flex-col">
                            <div className="flex gap-4">
                                {place.placeTitle.length < 20 && (
                                    <div className="text-2xl font-extrabold">
                                        {place.placeTitle}
                                    </div>
                                )}
                                {!openFullTab && (
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
                            {place.placeTitle.length > 20 && (
                                <div className="text-[16px] font-extrabold">
                                    {place.placeTitle}
                                </div>
                            )}
                            <div className="w-64 text-[10px]">
                                {place.placeSummary}
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
