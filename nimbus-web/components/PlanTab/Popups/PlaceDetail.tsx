import Review from "./Review";
import React, { useEffect, useState } from "react";
import { PlaceDetailProps } from "../PlanTabTypes";
import Stars from "@/components/Stars";
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
                        src={detail?.url}
                        className="rounded-xl border-2 bg-blue-100 col-span-7 "
                    />
                    {/* </div> */}
                    <div className="flex col-span-5 flex-col gap-2">
                        <div className="text-2xl font-extrabold">
                            {detail?.loc_name}
                        </div>
                        <div className="text-xs">{props.address}</div>

                        <Stars rating={100} size={40} />

                        <div className="text-[0.8rem] col-span-12 mt-2">
                            {detail?.description
                                ? detail?.description
                                : "No description provided"}
                        </div>
                        <div className="text-[0.8rem] col-span-12">
                            {"Price Level: " + detail?.price_level}
                        </div>
                    </div>

                    <Review
                        user="John Taobin"
                        reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, consectetur, a odit perspiciatis est hic blanditiis delectus voluptas quibusdam quasi quaerat? Neque quod aut quia consequatur nihil explicabo placeat sunt."
                    />
                    <Review
                        user="John Taobin"
                        reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, consectetur, a odit perspiciatis est hic blanditiis delectus voluptas quibusdam quasi quaerat? Neque quod aut quia consequatur nihil explicabo placeat sunt."
                    />
                    <Review
                        user="John Taobin"
                        reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, consectetur, a odit perspiciatis est hic blanditiis delectus voluptas quibusdam quasi quaerat? Neque quod aut quia consequatur nihil explicabo placeat sunt."
                    />
                </div>
            </div>
        </>
    );
};

export default PlaceDetail;
