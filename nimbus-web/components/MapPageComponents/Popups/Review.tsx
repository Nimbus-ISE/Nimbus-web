import React from "react";
import { useMediaQuery } from "@mui/material";
import Stars from "@/components/Stars";
import Image from "next/image";
import truncateWithDot from "@/utils/truncateWithDot";

interface IProps {
    review: IReview;
}

const Review = ({ review }: IProps) => {
    const { author, review_rating, review_text } = review;
    const isBigScreen = useMediaQuery("(min-width:768px)");
    return (
        <>
            <div
                className={` text-black bg-white rounded-2xl border-2 col-span-12 flex gap-4 items-center shadow-sm h-fit
                    ${isBigScreen ? "p-4" : "p-3"}`}
            >
                {isBigScreen && (
                    <Image
                        src={review.review_url || "/images/guest.jpg"}
                        alt="pfp"
                        width={32}
                        height={32}
                        className="aspect-square rounded-full place-self-start shadow-sm bg-slate-500 w-8 h-8"
                    />
                )}
                <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center pr-2">
                        <div className="text-sm font-bold whitespace-nowrap w-fit mr-2">
                            {truncateWithDot(author, 23)}
                        </div>
                        <div className="my-auto">
                            <Stars size={12} rating={Number(review_rating)} />
                        </div>
                    </div>

                    <div
                        className={
                            isBigScreen
                                ? "text-[0.8rem] w-full"
                                : "text-[0.65rem] w-full"
                        }
                    >
                        {review_text}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;
