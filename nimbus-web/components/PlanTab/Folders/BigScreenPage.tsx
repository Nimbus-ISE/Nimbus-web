import React from "react";
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

                    {/* <div
                        className={
                            "bg-rose-400 w-[100%] h-[110vh] text-[10rem] col-span-8  "
                        }
                    >
                        MAP
                    </div> */}
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
                                                    points[key].coordinates.lng,
                                                    points[key].coordinates.lat
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
