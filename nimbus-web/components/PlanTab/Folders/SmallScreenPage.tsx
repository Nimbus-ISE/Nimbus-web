import React from "react";
import { getPlanTabState } from "../PlanTabContext";

import Alternative from "../Popups/Alternative";
import PlaceDetail from "../Popups/PlaceDetail";
import SideBar from "./SideBar";
import FullScreenPlan from "./FullScreenPlan";

const SmallScreenPage = () => {
    const { openFullTab, openAlternatives, openReview, reviewData } =
        getPlanTabState();
    return (
        <div>
            {!openFullTab && (
                <>
                    <div className="h-[70vh]">
                        <img
                            src="/images/map_placeholder.webp"
                            className=" w-[100%] h-[110vh]  col-span-8"
                        />
                        <div>
                            {openReview && (
                                <div className=" bg-[#3e4560] bg-opacity-50 top-32 fixed ">
                                    <PlaceDetail
                                        placeTitle={reviewData.placeTitle}
                                        address={reviewData.address}
                                        placeDescription={
                                            reviewData.placeDescription
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="-translate-y-16">
                        <SideBar />
                    </div>
                </>
            )}
            {openFullTab && (
                <div>
                    <SideBar />
                </div>
            )}
            {!openReview && openAlternatives && (
                <div className=" bg-[#3e4560] bg-opacity-50 w-full h-full fixed bottom-0 ">
                    <Alternative />
                </div>
            )}
        </div>
    );
};

export default SmallScreenPage;
