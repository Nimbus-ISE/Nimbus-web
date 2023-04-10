import React from "react";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";
import FullScreenPlan from "./FullScreenPlan";
import Alternative from "../../Popups/Alternative";
import PlaceDetail from "../../Popups/PlaceDetail";
import SideBar from "./SideBar";

import SavePlanPopUp from "../../Popups/SavePlanPopUp";
import TripMap from "../../MapboxMap/TripMap";

const BigScreenPage = () => {
    const {
        openFullTab,
        openAlternatives,
        openReview,
        placeData,
        openSavePlan,
    } = getPlanTabState();
    const dispatch: any = getPlanTabDispatch();

    return (
        <>
            {openFullTab && !closed && <FullScreenPlan />}
            {!openFullTab && (
                <>
                    <SideBar />
                    {openSavePlan && <SavePlanPopUp />}

                    <TripMap />

                    <div className="col-span-8 w-full h-[100%]">
                        {openReview && (
                            <div
                                className=" bg-[#3e4560] bg-opacity-50 w-full h-full fixed bottom-0 left-1/3 "
                                onMouseDown={() => {
                                    dispatch({ type: "TOGGLE_PLACE_DETAILS" });
                                }}
                            >
                                <PlaceDetail
                                    placeTitle={placeData.placeTitle}
                                    address={placeData.address}
                                    placeDescription={
                                        placeData.placeDescription
                                    }
                                />
                            </div>
                        )}

                        {!openReview && openAlternatives && (
                            <div className=" bg-[#3e4560] bg-opacity-50 w-full h-full fixed bottom-0 left-1/3">
                                <Alternative />
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default BigScreenPage;
