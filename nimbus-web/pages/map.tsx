import { useEffect, useState, useRef, useCallback } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

import Map, {
    Marker,
    Popup,
    ScaleControl,
    MapRef,
    Layer,
    Source,
    MarkerDragEvent,
    LngLat,
} from "react-map-gl";
import Pin from "@/components/Pin";
import polyline from "@mapbox/polyline";
import useMap from "@/hooks/useMap";
import PlaceDetail from "@/components/PlanTab/Popups/PlaceDetail";
import SideBar from "@/components/PlanTab/Folders/SideBar";
import FullScreenPlan from "@/components/PlanTab/Folders/FullScreenPlan";
import Alternative from "@/components/PlanTab/Popups/Alternative";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
    PlanTabProvider,
    getPlanTabDispatch,
    getPlanTabState,
} from "@/components/PlanTab/PlanTabContext";

export default function map() {
    const {
        mapRef,
        points,
        togglePinState,
        onSelect,
        geojson,
        layerStyle,
        pinState,
    } = useMap();

    const {
        isBigScreen,
        openFullTab,
        openReview,
        openAlternatives,
        reviewData,
    }: any = getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
    const screenSize = useMediaQuery("(min-width:1000px)");

    useEffect(() => {
        dispatch({
            type: "SET_SCREEN_SIZE",
            payload: screenSize,
        });
        console.log(screenSize);
    }, [screenSize]);

    return (
        <div className="h-[90vh] w-[100vw] overflow-hidden">
            <div
                className={
                    isBigScreen
                        ? "grid place-items-center h-[90vh] z-50 bg-gray-300 text-black grid-cols-12 absolute w-full overflow-hidden"
                        : "  h-[92vh] z-50  bg-gray-300 text-black absolute w-full overflow-hidden gap-0"
                }
            >
                {!isBigScreen && (
                    <div>
                        {!openFullTab && (
                            <div className="h-[70vh]">
                                <div
                                    className={
                                        "bg-rose-400 w-[100%] h-[100%] text-[10rem] "
                                    }
                                >
                                    MAP
                                </div>
                                <div>
                                    {openReview && (
                                        <div className=" bg-[#3e4560] bg-opacity-50 top-32 fixed ">
                                            <PlaceDetail
                                                placeTitle={
                                                    reviewData.placeTitle
                                                }
                                                address={reviewData.address}
                                                placeDescription={
                                                    reviewData.placeDescription
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
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
                )}

                {!openFullTab && !isBigScreen && (
                    <div className="-translate-y-16">
                        <SideBar isBigScreen={isBigScreen} />
                    </div>
                )}

                {openFullTab && !closed && isBigScreen && <FullScreenPlan />}

                {!openFullTab && isBigScreen && (
                    <>
                        <SideBar isBigScreen={isBigScreen} />

                        <div
                            className={
                                "bg-rose-400 w-[100%] h-[110vh] text-[10rem] col-span-8  "
                            }
                        >
                            MAP
                        </div>

                        <div className="col-span-8 w-full h-[100%]">
                            {openReview && (
                                <div className=" bg-[#3e4560] bg-opacity-50 w-full h-full fixed bottom-0 left-1/3 ">
                                    <PlaceDetail
                                        placeTitle={reviewData.placeTitle}
                                        address={reviewData.address}
                                        placeDescription={
                                            reviewData.placeDescription
                                        }
                                    />
                                </div>
                            )}

                            {!openReview && openAlternatives && isBigScreen && (
                                <div className=" bg-[#3e4560] bg-opacity-50 w-full h-full fixed bottom-0 left-1/3">
                                    <Alternative />
                                </div>
                            )}
                        </div>
                    </>
                )}
                {/* {!openFullTab && (
        <Map
            ref={mapRef}
            initialViewState={{
                longitude: 100.5018,
                latitude: 13.7563,
                zoom: 10,
            }}
            style={{ gridColumnStart: 5, gridColumnEnd: "span 12" }}
            mapboxAccessToken={
                "pk.eyJ1IjoicGlwcC00MzIiLCJhIjoiY2xkYnF1NXU4MDM2MjNxcXdrczFibHJsdiJ9.uuksf9mguzejH6e6R0RQxg"
            }
            mapStyle="mapbox://styles/mapbox/streets-v12"
        >
            {Object.keys(points).map((key: string, index: number) => {
                return (
                    <Marker
                        longitude={points[key].coordinates.lng}
                        latitude={points[key].coordinates.lat}
                        anchor="bottom"
                        onClick={(e) => {
                            togglePinState(index);
                            onSelect(
                                points[key].coordinates.lng,
                                points[key].coordinates.lat
                            );
                            e.originalEvent.stopPropagation();
                        }}
                    >
                        <Pin fill={pinState[index]} />
                    </Marker>
                );
            }, [])}

            <ScaleControl />
            <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
            </Source>
        </Map>
    )} */}
            </div>
        </div>
    );
}
