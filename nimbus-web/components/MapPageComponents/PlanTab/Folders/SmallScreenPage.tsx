import React, { useEffect } from "react";
import { getPlanTabState, getPlanTabDispatch } from "../PlanTabContext";

import Alternative from "../../Popups/Alternative";
import PlaceDetail from "../../Popups/PlaceDetail";
import SideBar from "./SideBar";

import TripMap from "../../MapboxMap/TripMap";

const SmallScreenPage = () => {
    const { openFullTab, openAlternatives, openReview, placeData, fullPlan } =
        getPlanTabState();
    const dispatch: any = getPlanTabDispatch();

    return (
        <>
            {!openFullTab && fullPlan && (
                <>
                    <div className="h-[65vh]">
                        <TripMap />

                        <div>
                            {openReview && (
                                <div className="">
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
                <div
                    onMouseDown={() => {
                        dispatch({
                            type: "TOGGLE_ALTERNATIVES",
                            payload: false,
                        });
                    }}
                >
                    <Alternative />
                </div>
            )}
        </>
    );
};

export default SmallScreenPage;
