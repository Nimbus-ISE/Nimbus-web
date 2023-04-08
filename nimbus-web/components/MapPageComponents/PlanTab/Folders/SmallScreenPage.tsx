import React from "react";
import { getPlanTabState } from "../PlanTabContext";

import Alternative from "../../Popups/Alternative";
import PlaceDetail from "../../Popups/PlaceDetail";
import SideBar from "./SideBar";

import TripMap from "../../MapboxMap/TripMap";

const SmallScreenPage = () => {
    const { openFullTab, openAlternatives, openReview, placeData, fullPlan } =
        getPlanTabState();

    return (
        <>
            {!openFullTab && fullPlan && (
                <>
                    <div className="h-[70vh] -z-10">
                        {/* <TripMap /> */}

                        <div>
                            {openReview && (
                                <div className=" bg-[#3e4560] bg-opacity-50 top-32 fixed ">
                                    <PlaceDetail
                                        placeTitle={placeData.placeTitle}
                                        address={placeData.address}
                                        placeDescription={
                                            placeData.placeDescription
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <>
                        <SideBar />
                    </>
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
        </>
    );
};

export default SmallScreenPage;
