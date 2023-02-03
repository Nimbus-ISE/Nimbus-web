interface planGraphProps {
    places: Array<PlaceType>;
    dayNumber: number;
    toggleOpenReview?: any;
    clickable: boolean;
    address: string;
}
interface PlaceType {
    placeTitle: string;
    placeSummary: string;
    placeDescription: string;
    address: string;
    imgLink: string;
}
const PlanGraph = (props: planGraphProps) => {
    return (
        <div className="flex flex-col items-left  mt-4 bg-white ">
            <div className="ml-4 h-8 w-20 rounded-2xl bg-[#45d8d0] text-center text-white font-extrabold ">
                Day {props.dayNumber}
            </div>
            {props.places?.map((place: PlaceType) => (
                <>
                    <div className="h-10 w-1 ml-14 bg-[#45d8d0] rounded"></div>
                    <div className="flex flex-row items-center text-xs gap-4">
                        <img
                            src={place.imgLink}
                            className={
                                props.clickable
                                    ? "h-28 w-28 rounded-full hover:scale-110 duration-300 cursor-pointer shadow"
                                    : "h-28 w-28 rounded-full shadow"
                            }
                            onMouseDown={() => {
                                props.toggleOpenReview({
                                    placeTitle: place.placeTitle,
                                    placeDescription: place.placeDescription,
                                    address: place.address,
                                });
                            }}
                        />
                        <div className="flex flex-col">
                            {place.placeTitle.length < 20 && (
                                <div className="text-2xl font-extrabold">
                                    {place.placeTitle}
                                </div>
                            )}
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
