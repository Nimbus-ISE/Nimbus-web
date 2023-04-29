import React, { useEffect } from "react";
import { getPlanTabState, getPlanTabDispatch } from "../PlanTabContext";

import Alternative from "../../Popups/Alternative";
import PlaceDetail from "../../Popups/PlaceDetail";
import SideBar from "./SideBar";

import TripMap from "../../MapboxMap/TripMap";
import Loading from "@/components/Loading";

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
                                    className="bg-[#3e4560] bg-opacity-50 opacity-100 z-10 w-full h-[68.5vh] absolute top-0 "
                                    // onMouseDown={() => {
                                    //     dispatch({
                                    //         type: "SET",
                                    //         payload: {
                                    //             property: "openReview",
                                    //             value: false,
                                    //         },
                                    //     });
                                    // }}
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
                                type: "SET",
                                payload: {
                                    property: "openAlternatives",
                                    value: true,
                                },
                            });
                        }}
                    ></div>
                </>
            )}
            {map_polyline === "" && (
                <div className=" bg-[#3e4560] bg-opacity-50 opacity-100 w-full h-[68.5vh] absolute top-0">
                    <div className="absolute top-[50%] left-[45%]">
                        <Loading />
                    </div>
                </div>
            )}
        </>
    );
};

export default SmallScreenPage;
