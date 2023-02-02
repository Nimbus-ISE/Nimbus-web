import React from "react";
interface IProps {
    imgLink?: string;
    user: string;
    reviewText: string;
    numberOfStars?: number;
}
const Review = (props: IProps) => {
    return (
        <>
            <div className="col-span-12 border-4 border-[#e6e6d6] rounded-full h-32 flex gap-4 items-center p-6">
                <div className="rounded-full bg-slate-500 w-20 h-20"></div>
                <div className="flex flex-col gap-2 ">
                    <div className="flex gap-4 items-center">
                        <div className="text-lg font-extrabold">
                            {props.user}
                        </div>
                        <div className="bg-yellow-300 w-24 h-6"></div>
                    </div>

                    <div className="text-xs w-[36rem] ">{props.reviewText}</div>
                </div>
            </div>
        </>
    );
};

export default Review;
