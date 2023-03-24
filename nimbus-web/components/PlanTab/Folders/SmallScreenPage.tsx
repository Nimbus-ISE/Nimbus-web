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
        reviewData,
        fullPlan,
        currentFolderView,
    } = getPlanTabState();
    return (
        <div>
            {!openFullTab && (
                <>
                    <div className="h-[70vh] -z-10">
                        {/* {!openFullTab && (
                            <Map
                                ref={mapRef}
                                initialViewState={{
                                    longitude: 100.5018,
                                    latitude: 13.7563,
                                    zoom: 10,
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
                                {Object.keys(points).map(
                                    (key: string, index: number) => {
                                        return (
                                            <Marker
                                                longitude={
                                                    points[key].coordinates.lng
                                                }
                                                latitude={
                                                    points[key].coordinates.lat
                                                }
                                                anchor="bottom"
                                                onClick={(e) => {
                                                    togglePinState(index);
                                                    onSelect(
                                                        points[key].coordinates
                                                            .lng,
                                                        points[key].coordinates
                                                            .lat
                                                    );
                                                    e.originalEvent.stopPropagation();
                                                }}
                                            >
                                                <Pin fill={pinState[index]} />
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
                                        placeTitle={reviewData.placeTitle}
                                        address={reviewData.address}
                                        placeDescription={
                                            reviewData.placeDescription
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
