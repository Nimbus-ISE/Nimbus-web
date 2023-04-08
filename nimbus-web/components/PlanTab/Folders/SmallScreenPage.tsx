import React, { useEffect } from "react";
import { getPlanTabState } from "../PlanTabContext";
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
    useMap,
} from "react-map-gl";
import Pin from "@/components/Pin";
import polyline from "@mapbox/polyline";
import Alternative from "../Popups/Alternative";
import PlaceDetail from "../Popups/PlaceDetail";
import SideBar from "./SideBar";
import FullScreenPlan from "./FullScreenPlan";
import useMapLogic from "@/hooks/useMap";
import SavePlanPopUp from "../Popups/SavePlanPopUp";
import mapboxgl from "mapbox-gl";

const SmallScreenPage = () => {
    const {
        mapRef,
        points,
        togglePinState,
        onSelect,
        geojson,
        layerStyle,
        pinState,
    } = useMapLogic();
    const {
        openFullTab,
        openAlternatives,
        openReview,
        placeData,
        fullPlan,
        currentFolderView,
        currentFolder,
    } = getPlanTabState();

    const { mainMap }: any = useMap();

    useEffect(() => {
        if (fullPlan[currentFolder] && mainMap?.flyTo) {
            mainMap.flyTo({
                center: [
                    fullPlan[currentFolder].location_data[0].lng,
                    fullPlan[currentFolder].location_data[0].lat,
                ],
            });
        }

        mapRef.current?.resize();
    }, [currentFolder, points[currentFolder], pinState, fullPlan, mainMap]);

    return (
        <div>
            {!openFullTab && fullPlan && (
                <>
                    <div className="h-[70vh] -z-10">
                        {!openFullTab &&
                            fullPlan[currentFolder] &&
                            pinState[currentFolder] && (
                                <Map
                                    id="mainMap"
                                    initialViewState={{
                                        latitude:
                                            fullPlan[currentFolder]
                                                .location_data.lat || "13.7563",
                                        longitude:
                                            fullPlan[currentFolder]
                                                .location_data.lng ||
                                            "100.5018",
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
                                        fullPlan[
                                            currentFolder
                                        ].location_data.map(
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
                    <div className="-translate-y-16">
                        <SideBar />
                    </div>
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
        </div>
    );
};

export default SmallScreenPage;
