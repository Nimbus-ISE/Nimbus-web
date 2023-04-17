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
        map_polyline,
    } = getPlanTabState();
    const dispatch: any = getPlanTabDispatch();

    return (
        <>
            {openFullTab && !closed && <FullScreenPlan />}
            {!openFullTab && (
                <>
                    <SideBar />
                    <TripMap />
                    {openSavePlan && (
                        <div
                            className="bg-[#3e4560] bg-opacity-50 w-full h-full fixed bottom-0 left-1/3 "
                            onMouseDown={() => {
                                dispatch({ type: "TOGGLE_SAVE_PLAN" });
                            }}
                        >
                            <SavePlanPopUp />
                        </div>
                    )}

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
                        {map_polyline === "" && (
                            <div className=" bg-[#3e4560] bg-opacity-50 w-full h-full fixed bottom-0 left-1/3  z-50">
                                <div className="text-white text-3xl font-bold bg-black  absolute text-center top-[45vh] rounded-xl left-[30vw] h-20 w-40">
                                    Loading map...
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default BigScreenPage;
