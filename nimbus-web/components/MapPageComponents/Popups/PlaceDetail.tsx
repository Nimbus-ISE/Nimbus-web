import Review from "./Review";
import React, { useEffect, useState } from "react";
import { PlaceDetailProps } from "../PlanTab/PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTab/PlanTabContext";
import Stars from "@/components/Stars";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import Dialog from "@mui/material/Dialog";

const PlaceDetail = (props: PlaceDetailProps) => {
    const { isBigScreen, placeData: data } = getPlanTabState();
    const [reviewData, setReviewData] = useState([]);
    const dispatch: any = getPlanTabDispatch();
    // const data = placeData;

    const fetchReview = async (loc_id: string) => {
        const res = await fetch(`/api/getReview/?loc_id=${loc_id}`);
        const plan = await res.json();
        return plan;
    };
    useEffect(() => {
        (async () => {
            fetchReview(data?.loc_id).then((result: any) => {
                setReviewData(result);
            });
        })();
    }, [data]);

    return (
        <>
            <Dialog
                open={true}
                maxWidth={"md"}
                PaperProps={{
                    style: {
                        backgroundColor: "transparent",
                    },
                }}
            >
                <button
                    className="absolute top-0 right-0 z-10 m-2 hover:bg-opacity-75 h-7 w-7 p-2 rounded-lg duration-300 text-neutral-700 text-sm flex justify-center items-center bg-white bg-opacity-1 backdrop-blur-sm"
                    onClick={() =>
                        dispatch({
                            type: "SET",
                            payload: { property: "openReview", value: false },
                        })
                    }
                >
                    <>
                        <CloseIcon sx={{ height: "20px" }} />
                    </>
                </button>
                <div
                    className={
                        isBigScreen
                            ? "shadow-md rounded-xl bg-white p-2 overflow-y-auto overflow-x-hidden scrollbar-hide "
                            : "shadow-md rounded-xl bg-white px-4 pb-4 overflow-y-auto scrollbar-hide "
                    }
                >
                    {" "}
                    {!isBigScreen && (
                        <div className="-mx-4">
                            <img
                                src={data?.url.split(",")[0]}
                                className=" bg-[#45D8D0] h-40 w-full -mb-5
                         object-cover shadow-md"
                            />
                        </div>
                    )}
                    <div
                        className={
                            "gap-6 " +
                            (isBigScreen ? "p-6 grid grid-cols-12" : "pt-6")
                        }
                    >
                        {isBigScreen && (
                            <img
                                src={data?.url.split(",")[0]}
                                className="rounded-xl bg-[#45D8D0] col-span-7 object-cover h-60 
                            w-full shadow-md mx-auto"
                            />
                        )}

                        <div
                            className={
                                "flex flex-col gap-2 mt-[2vh] " +
                                (isBigScreen ? "col-span-5" : "")
                            }
                        >
                            <div
                                className={
                                    isBigScreen
                                        ? "text-2xl font-extrabold "
                                        : "text-xl font-extrabold"
                                }
                            >
                                {data?.loc_name}
                            </div>

                            <Stars
                                rating={data?.rating}
                                size={isBigScreen ? 20 : 15}
                            />

                            <div
                                className={
                                    isBigScreen
                                        ? "text-[0.8rem] col-span-12 mt-2"
                                        : "text-[0.8rem]"
                                }
                            >
                                <div className="text-[0.8rem] font-bold mt-2">
                                    Address
                                </div>
                                <div className="text-[0.8rem] pr-[16px]">
                                    {data?.address && data?.province
                                        ? data?.address + " " + data?.province
                                        : "No address provided"}
                                </div>

                                <div className="text-[0.8rem] col-span-12 mt-2">
                                    <span className="font-bold">
                                        Price Level:{" "}
                                    </span>
                                    {" " + data?.price_level} / 4
                                </div>
                            </div>
                        </div>
                        {!isBigScreen && (
                            <div className="col-span-12 leading-3">
                                <br></br>
                                <Divider />
                                <br></br>
                            </div>
                        )}

                        <div className="flex flex-col col-span-12">
                            <div className="text-[0.8rem] font-bold ">
                                Description
                            </div>
                            <div className="text-[0.8rem] ">
                                {data?.description
                                    ? data?.description
                                    : "No description provided"}
                            </div>
                        </div>

                        <div className="col-span-12 leading-3">
                            <br></br>
                            <Divider />
                            <br></br>
                        </div>
                        <div className="flex flex-col col-span-12 gap-3 w-full">
                            <div className="text-[0.8rem] font-bold">
                                Google Reviews
                            </div>
                            {reviewData?.map((review: any) => {
                                return (
                                    <Review
                                        review={{
                                            ...review,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default PlaceDetail;
