import React from "react";
import { ReviewProps } from "../PlanTabTypes";
import { getPlanTabState } from "../PlanTabContext";
import { useMediaQuery } from "@mui/material";

const Review = (props: ReviewProps) => {
    const isBigScreen = useMediaQuery("(min-width:1000px)");
    return (
        <>
            <div
                className={
                    isBigScreen
                        ? "col-span-12 border-4 border-[#e6e6d6] rounded-full h-32 flex gap-4 items-center p-6"
                        : "col-span-12  w-[80vw]  flex gap-4 items-center pt-2 "
                }
            >
                {isBigScreen && (
                    // <div className="rounded-full bg-slate-500 w-[7vw] h-[7vw]"></div>
                    <img
                        src="images/guest.jpg"
                        alt="pfp"
                        className="rounded-full bg-slate-500 w-[7vw] h-[7vw]"
                    />
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
                            isBigScreen
                                ? "text-xs w-96 "
                                : "text-[0.6rem] w-[70vw] "
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
