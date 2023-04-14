import React, { useEffect } from "react";
import { getPlanTabState, getPlanTabDispatch } from "../PlanTabContext";

import Alternative from "../../Popups/Alternative";
import PlaceDetail from "../../Popups/PlaceDetail";
import SideBar from "./SideBar";

import TripMap from "../../MapboxMap/TripMap";

const SmallScreenPage = () => {
    const {
        openFullTab,
        openAlternatives,
        openReview,
        placeData,
        fullPlan,
        map_polyline,
    } = getPlanTabState();
    const dispatch: any = getPlanTabDispatch();

    return (
        <>
            {!openFullTab && fullPlan && (
                <>
                    <div className="h-[65vh]">
                        <TripMap />

                        <div>
                            {openReview && (
                                <div
                                    className="bg-[#3e4560] bg-opacity-50 opacity-100 z-10  w-full  h-[68.5vh] absolute top-0 "
                                    onMouseDown={() => {
                                        dispatch({
                                            type: "TOGGLE_PLACE_DETAILS",
                                            payload: false,
                                        });
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
                <>
                    <Alternative />
                    <div
                        className="bg-[#3e4560] bg-opacity-50 opacity-100 w-full h-[68.5vh] absolute top-0  "
                        onMouseDown={() => {
                            dispatch({
                                type: "TOGGLE_ALTERNATIVES",
                                payload: false,
                            });
                        }}
                    ></div>
                </>
            )}
            {map_polyline === "" && (
                <div className=" bg-[#3e4560] bg-opacity-50 opacity-100 w-full h-[68.5vh] absolute top-0">
                    <div className="text-white text-3xl font-bold bg-black  absolute text-center top-[35vh] left-[30vw] h-20 w-40">
                        Loading map...
                    </div>
                </div>
            )}
        </>
    );
};

export default SmallScreenPage;
