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
import SavePlanPopUp from "../Popups/SavePlanPopUp";

const BigScreenPage = () => {
    const {
        openFullTab,
        openAlternatives,
        openReview,
        isBigScreen,
        placeData,
        currentFolder,
        fullPlan,
        openSavePlan,
        map_polyline,
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

    return (
        <>
            {openFullTab && !closed && <FullScreenPlan />}
            {!openFullTab && (
                <>
                    <SideBar />
                    {openSavePlan && <SavePlanPopUp />}

                    {!openFullTab &&
                        fullPlan[currentFolder] &&
                        pinState[currentFolder] && (
                            <Map
                                initialViewState={{
                                    latitude:
                                        fullPlan[currentFolder].location_data
                                            .lat || "13.7563",
                                    longitude:
                                        fullPlan[currentFolder].location_data
                                            .lng || "100.5018",
                                    zoom: 14,
                                }}
                                attributionControl={false}
                                style={{
                                    gridColumnStart: 5,
                                    gridColumnEnd: "span 12",
                                }}
                                mapboxAccessToken={
                                    "pk.eyJ1IjoicGlwcC00MzIiLCJhIjoiY2xkYnF1NXU4MDM2MjNxcXdrczFibHJsdiJ9.uuksf9mguzejH6e6R0RQxg"
                                }
                                mapStyle="mapbox://styles/mapbox/streets-v12?optimize=true'"
                            >
                                {fullPlan[currentFolder] &&
                                    fullPlan[currentFolder].location_data.map(
                                        (point: any, index: any) => {
                                            return (
                                                <Marker
                                                    longitude={point.lng}
                                                    latitude={point.lat}
                                                    anchor="bottom"
                                                    onClick={(e) => {
                                                        togglePinState(
                                                            currentFolder,
                                                            index
                                                        );
                                                        onSelect(
                                                            point.lng,
                                                            point.lat
                                                        );
                                                        e.originalEvent.stopPropagation();
                                                    }}
                                                >
                                                    <span className="text-center bg-black text-cyan-300 p-[2px] rounded">
                                                        {
                                                            fullPlan[
                                                                currentFolder
                                                            ].location_data[
                                                                index
                                                            ].loc_name
                                                        }
                                                    </span>

                                                    <Pin
                                                        fill={
                                                            pinState[
                                                                currentFolder
                                                            ][index]
                                                        }
                                                        number={index + 1}
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
                                <Source
                                    id="my-data"
                                    type="geojson"
                                    data={geojson}
                                >
                                    <Layer {...layerStyle} />
                                </Source>
                            </Map>
                        )}

                    <div className="col-span-8 w-full h-[100%]">
                        {openReview && (
                            <div className=" bg-[#3e4560] bg-opacity-50 w-full h-full fixed bottom-0 left-1/3 ">
                                <PlaceDetail
                                    placeTitle={placeData.placeTitle}
                                    address={placeData.address}
                                    placeDescription={
                                        placeData.placeDescription
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
