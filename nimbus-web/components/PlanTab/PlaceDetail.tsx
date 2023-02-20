import Review from "./Review";
import React from "react";
import { PlaceDetailProps } from "./PlanTabTypes";

const PlaceDetail = (props: PlaceDetailProps) => {
    return (
        <>
            <div
                className={
                    props.isBigScreen
                        ? "bg-black rounded-full w-10 h-10 text-center text-white absolute flex items-center top-24 left-[53.5rem] z-50 cursor-pointer"
                        : "bg-black rounded-full w-10 h-10 text-center text-white absolute flex items-center -top-[5vw] left-[83vw] z-50 cursor-pointer"
                }
                onMouseDown={props.toggleOpenReview}
            >
                <div className="ml-4">x</div>
            </div>
            <div
                className={
                    props.isBigScreen
                        ? "bg-white rounded-xl h-[35rem] w-[50rem] absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2  overflow-y-scroll scrollbar-hide  animate-fade-in "
                        : "bg-white rounded-xl h-[25rem] w-[20rem] absolute top-1/2 left-1/3 transform translate-x-[10%] overflow-y-scroll scrollbar-hide  animate-fade-in "
                }
            >
                <div className="grid grid-cols-12 p-6 gap-6">
                    <div
                        className={
                            props.isBigScreen
                                ? "rounded-xl border-2 bg-blue-100 col-span-7 h-48 "
                                : "rounded-xl border-2 bg-blue-100 col-span-12 h-48 "
                        }
                    >
                        Image
                    </div>
                    <div className="flex col-span-5 flex-col gap-2">
                        <div className="text-2xl font-extrabold">
                            {props.placeTitle}
                        </div>
                        <div className="text-xs">{props.address}</div>
                        <div
                            className={
                                props.isBigScreen
                                    ? "w-full h-12 bg-yellow-300"
                                    : "w-[15rem] h-12 bg-yellow-300"
                            }
                        >
                            Stars
                        </div>
                    </div>
                    <div className="text-base col-span-12">
                        {props.placeDescription}
                    </div>
                    <Review
                        user="John Taobin"
                        reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, consectetur, a odit perspiciatis est hic blanditiis delectus voluptas quibusdam quasi quaerat? Neque quod aut quia consequatur nihil explicabo placeat sunt."
                        isBigScreen={props.isBigScreen}
                    />
                    <Review
                        user="John Taobin"
                        reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, consectetur, a odit perspiciatis est hic blanditiis delectus voluptas quibusdam quasi quaerat? Neque quod aut quia consequatur nihil explicabo placeat sunt."
                        isBigScreen={props.isBigScreen}
                    />
                    <Review
                        user="John Taobin"
                        reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, consectetur, a odit perspiciatis est hic blanditiis delectus voluptas quibusdam quasi quaerat? Neque quod aut quia consequatur nihil explicabo placeat sunt."
                        isBigScreen={props.isBigScreen}
                    />
                </div>
            </div>
        </>
    );
};

export default PlaceDetail;
