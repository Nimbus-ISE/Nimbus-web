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
} from "react-map-gl";
import Pin from "@/components/Pin";
import polyline from "@mapbox/polyline";
import Alternative from "../Popups/Alternative";
import PlaceDetail from "../Popups/PlaceDetail";
import SideBar from "./SideBar";
import FullScreenPlan from "./FullScreenPlan";
import useMap from "@/hooks/useMap";
import SavePlanPopUp from "../Popups/SavePlanPopUp";

const SmallScreenPage = () => {
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
        openFullTab,
        openAlternatives,
        openReview,
        placeData,
        fullPlan,
        currentFolderView,
        currentFolder,
    } = getPlanTabState();
    console.log(pinState);
    useEffect(() => {
        if (fullPlan[currentFolder]) {
            mapRef.current?.flyTo({
                center: [
                    fullPlan[currentFolder][0].lng,
                    fullPlan[currentFolder][0].lat,
                ],
            });
        }

        mapRef.current?.resize();
    }, [currentFolder, points[currentFolder], pinState, fullPlan]);
    return (
        <div>
            {!openFullTab && fullPlan && (
                <>
                    <div className="h-[70vh] -z-10">
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
                                {fullPlan[0] &&
                                    fullPlan[currentFolder].map(
                                        (point: any, index: any) => {
                                            return (
                                                <Marker
                                                    longitude={point.lng}
                                                    latitude={point.lat}
                                                    anchor="bottom"
                                                    onClick={(e) => {
                                                        console.log(index);

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
                                                            ][index].loc_name
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
                        )} */}

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
