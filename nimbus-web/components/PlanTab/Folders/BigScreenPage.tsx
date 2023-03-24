import React, { useEffect, useState } from "react";
import { getPlanTabState } from "../PlanTabContext";
import FullScreenPlan from "./FullScreenPlan";
import Alternative from "../Popups/Alternative";
import PlaceDetail from "../Popups/PlaceDetail";
import SideBar from "./SideBar";
import Map, {
    Marker,
    Popup,
    ScaleControl,
    MapRef,
    Layer,
    Source,
    MarkerDragEvent,
    LngLat,
    AttributionControl,
} from "react-map-gl";
import Pin from "@/components/Pin";
import polyline from "@mapbox/polyline";
import useMap from "@/hooks/useMap";

const BigScreenPage = () => {
    const {
        openFullTab,
        openAlternatives,
        openReview,
        isBigScreen,
        reviewData,
        initalCoordinates,
        currentFolder,
    } = getPlanTabState();
    const {
        mapRef,
        points,
        togglePinState,
        onSelect,
        geojson,
        layerStyle,
        pinState,
    } = useMap();
    console.log(pinState);

    useEffect(() => {
        mapRef.current?.flyTo({
            center: [
                initalCoordinates[currentFolder][1],
                initalCoordinates[currentFolder][0],
            ],
        });
        mapRef.current?.resize();
    }, [currentFolder]);

    return (
        <>
            {openFullTab && !closed && <FullScreenPlan />}
            {!openFullTab && (
                <>
                    <SideBar />

                    {/* {!openFullTab && (
                        <Map
                            ref={mapRef}
                            initialViewState={{
                                latitude: points[currentFolder][0],
                                longitude: points[currentFolder][1],
                                zoom: 15,
                            }}
                            attributionControl={false}
                            style={{
                                gridColumnStart: 5,
                                gridColumnEnd: "span 12",
                            }}
                            mapboxAccessToken={
                                "pk.eyJ1IjoicGlwcC00MzIiLCJhIjoiY2xkYnF1NXU4MDM2MjNxcXdrczFibHJsdiJ9.uuksf9mguzejH6e6R0RQxg"
                            }
                            mapStyle="mapbox://styles/mapbox/streets-v12"
                        >
                            {points[0] &&
                                points[currentFolder].map(
                                    (point: any, index: any) => {
                                        return (
                                            <Marker
                                                longitude={point[1]}
                                                latitude={point[0]}
                                                anchor="bottom"
                                                onClick={(e) => {
                                                    console.log(index);

                                                    togglePinState(
                                                        currentFolder,
                                                        index
                                                    );
                                                    onSelect(
                                                        point[1],
                                                        point[0]
                                                    );
                                                    e.originalEvent.stopPropagation();
                                                }}
                                            >
                                                <Pin
                                                    fill={
                                                        pinState[currentFolder][
                                                            index
                                                        ]
                                                    }
                                                />
                                            </Marker>
                                        );
                                    },
                                    []
                                )}

                            <ScaleControl position="top-right" />
                            <AttributionControl
                                position="top-left"
                                compact={true}
                            />
                            <Source id="my-data" type="geojson" data={geojson}>
                                <Layer {...layerStyle} />
                            </Source>
                        </Map>
                    )} */}

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
        </>
    );
};

export default BigScreenPage;
