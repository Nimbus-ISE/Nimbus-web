import React from "react";
import { ReviewProps } from "./PlanTabTypes";

const Review = (props: ReviewProps) => {
    return (
        <>
            <div
                className={
                    props.isBigScreen
                        ? "col-span-12 border-4 border-[#e6e6d6] rounded-full h-32 flex gap-4 items-center p-6"
                        : "col-span-12  w-64  flex gap-4 items-center p-6"
                }
            >
                {props.isBigScreen && (
                    <div className="rounded-full bg-slate-500 w-20 h-20"></div>
                )}
                <div className="flex flex-col gap-2 ">
                    <div className="flex gap-4 items-center">
                        <div className="text-lg font-extrabold">
                            {props.user}
                        </div>
                        <div className="bg-yellow-300 w-24 h-6">Stars</div>
                    </div>

                    <div
                        className={
                            props.isBigScreen
                                ? "text-xs w-96 "
                                : "text-xs w-64 "
                        }
                    >
                        {props.reviewText}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;
