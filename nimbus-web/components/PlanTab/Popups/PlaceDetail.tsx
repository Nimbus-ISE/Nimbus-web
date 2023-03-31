import Review from "./Review";
import React, { useEffect, useState } from "react";
import { PlaceDetailProps } from "../PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";

const PlaceDetail = (props: PlaceDetailProps) => {
    const { isBigScreen, placeData } = getPlanTabState();
    const [detail, setDetail]: any = useState();
    const dispatch: any = getPlanTabDispatch();
    const fetchDetail = async () => {
        const response = await fetch(
            `/api/getLocationData?loc_id=${placeData.loc_id}`
        );
        const result = await response.json();
        return result;
    };

    useEffect(() => {
        fetchDetail().then((data) => {
            console.log(data[0]);

            setDetail(data[0]);
        });
    }, []);

    return (
        <>
            <div
                className={
                    isBigScreen
                        ? "bg-black rounded-full w-10 h-10 text-center text-white absolute flex items-center top-24 left-[57%] z-50 cursor-pointer"
                        : "bg-black rounded-full w-10 h-10 text-center text-white absolute flex items-center -top-4 left-[90vw]  z-50 cursor-pointer "
                }
                onMouseDown={() => {
                    dispatch({ type: "TOGGLE_PLACE_DETAILS" });
                }}
            >
                <div className="ml-4 text-center">x</div>
            </div>
            <div
                className={
                    isBigScreen
                        ? "bg-white rounded-xl h-[70%] w-[50%] absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2  overflow-y-scroll overflow-x-hide scrollbar-hide  animate-fade-in "
                        : "bg-white rounded-xl h-[45vh] w-[85vw] absolute top-1/2 left-1/3 transform translate-x-[10%] overflow-y-scroll overflow-x-hide scrollbar-hide  animate-fade-in"
                }
            >
                <div className="grid grid-cols-12 p-6 gap-6 ">
                    {/* <div
                        className={
                            isBigScreen
                                ? "rounded-xl border-2 bg-blue-100 col-span-7 h-40 "
                                : "rounded-xl border-2 bg-blue-100 col-span-12 h-40"
                        }
                    > */}
                    <img
                        src="/images/ThorsWell.jpg"
                        className="rounded-xl border-2 bg-blue-100 col-span-7 "
                    />
                    {/* </div> */}
                    <div className="flex col-span-5 flex-col gap-2">
                        <div className="text-2xl font-extrabold">
                            {detail?.loc_name}
                        </div>
                        <div className="text-xs">{props.address}</div>
                        <div
                            className={
                                isBigScreen ? "w-full h-12" : "w-[15rem] h-12 "
                            }
                        >
                            {/* <Star size="h-10" percent="100" /> */}
                        </div>
                    </div>
                    <div className="text-[0.6rem] col-span-12">
                        {detail?.description}
                    </div>
                    <Review
                        review={{
                            author: "John Taobin",
                            review_date: 1,
                            review_rating: "4.4",
                            review_text:
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cupiditate nesciunt, nostrum hic nulla, porro delectus harum veritatis odio placeat veniam inventore quibusdam. Harum optio quos facilis, deserunt porro accusamus?",
                        }}
                    />
                    <Review
                        review={{
                            author: "John Taobin",
                            review_date: 1,
                            review_rating: "4.4",
                            review_text:
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cupiditate nesciunt, nostrum hic nulla, porro delectus harum veritatis odio placeat veniam inventore quibusdam. Harum optio quos facilis, deserunt porro accusamus?",
                        }}
                    />
                    <Review
                        review={{
                            author: "John Taobin",
                            review_date: 1,
                            review_rating: "4.4",
                            review_text:
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cupiditate nesciunt, nostrum hic nulla, porro delectus harum veritatis odio placeat veniam inventore quibusdam. Harum optio quos facilis, deserunt porro accusamus?",
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default PlaceDetail;
