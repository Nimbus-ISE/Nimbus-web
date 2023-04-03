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

    useEffect(() => {
        if (fullPlan[currentFolder]) {
            mapRef.current?.flyTo({
                center: [
                    fullPlan[currentFolder][0].coordinate[1],
                    fullPlan[currentFolder][0].coordinate[0],
                ],
            });
            // const str = { plan: fullPlan };
            // console.log(JSON.stringify(str));
        }

        mapRef.current?.resize();
    }, [currentFolder, points[currentFolder], pinState, fullPlan]);

    return (
        <>
            {openFullTab && !closed && <FullScreenPlan />}
            {!openFullTab && (
                <>
                    <SideBar />
                    {openSavePlan && <SavePlanPopUp />}

                    {/* {!openFullTab && (
                        <Map
                            ref={mapRef}
                            initialViewState={{
                                latitude: 13.7563,
                                longitude: 100.5018,
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
                            mapStyle="mapbox://styles/mapbox/streets-v12?optimize=true'"
                        >
                            {fullPlan[currentFolder] &&
                                fullPlan[currentFolder].map(
                                    (point: any, index: any) => {
                                        return (
                                            <Marker
                                                longitude={point.coordinate[1]}
                                                latitude={point.coordinate[0]}
                                                anchor="bottom"
                                                onClick={(e) => {
                                                    console.log(index);

                                                    togglePinState(
                                                        currentFolder,
                                                        index
                                                    );
                                                    onSelect(
                                                        point.coordinate[1],
                                                        point.coordinate[0]
                                                    );
                                                    e.originalEvent.stopPropagation();
                                                }}
                                            >
                                                <span className="text-center bg-black text-cyan-300 p-[2px] rounded">
                                                    {
                                                        fullPlan[currentFolder][
                                                            index
                                                        ].name
                                                    }
                                                </span>
                                                {pinState[currentFolder] && (
                                                    <Pin
                                                        fill={
                                                            pinState[
                                                                currentFolder
                                                            ][index]
                                                        }
                                                        number={index + 1}
                                                    />
                                                )}
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
