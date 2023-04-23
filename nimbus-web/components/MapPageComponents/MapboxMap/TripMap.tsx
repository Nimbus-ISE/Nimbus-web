import React from "react";
import useMapLogic from "@/hooks/useMap";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTab/PlanTabContext";
import Pin from "@/components/MapPageComponents/MapboxMap/Pin";
import Map, {
    Marker,
    ScaleControl,
    Layer,
    Source,
    AttributionControl,
    useMap,
    Popup,
} from "react-map-gl";

const TripMap = () => {
    const { openFullTab, fullPlan, currentFolder } = getPlanTabState();
    const {
        mapRef,
        points,
        togglePinState,
        onSelect,
        geojson,
        layerStyle,
        pinState,
    } = useMapLogic();
    const { mainMap }: any = useMap();
    const dispatch: any = getPlanTabDispatch();

    React.useEffect(() => {
        if (
            fullPlan[currentFolder] &&
            mainMap?.flyTo &&
            fullPlan[currentFolder]?.location_data[0]?.lng
        ) {
            mainMap.flyTo({
                center: [
                    fullPlan[currentFolder]?.location_data[0]?.lng,
                    fullPlan[currentFolder]?.location_data[0]?.lat,
                ],
            });
        }

        mapRef.current?.resize();
    }, [currentFolder, points[currentFolder], fullPlan, mainMap]);

    return (
        <>
            {!openFullTab &&
                fullPlan[currentFolder] &&
                pinState[currentFolder] && (
                    <Map
                        id="mainMap"
                        initialViewState={{
                            latitude:
                                fullPlan[currentFolder].location_data.lat ||
                                "13.7563",
                            longitude:
                                fullPlan[currentFolder].location_data.lng ||
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
                            fullPlan[currentFolder].location_data.map(
                                (point: any, index: any) => {
                                    return (
                                        <Marker
                                            longitude={point.lng}
                                            latitude={point.lat}
                                            anchor="bottom"
                                            onClick={(e) => {
                                                onSelect(point.lng, point.lat);

                                                dispatch({
                                                    type: "TOGGLE_PLACE_DETAILS",
                                                    payload: {
                                                        place: fullPlan[
                                                            currentFolder
                                                        ].location_data[index],
                                                    },
                                                });

                                                e.originalEvent.stopPropagation();
                                            }}
                                        >
                                            {pinState[currentFolder][index] && (
                                                <Popup
                                                    anchor="top"
                                                    longitude={point.lng}
                                                    latitude={point.lat}
                                                >
                                                    <div className="font-extrabold">
                                                        {
                                                            fullPlan[
                                                                currentFolder
                                                            ].location_data[
                                                                index
                                                            ].loc_name
                                                        }
                                                    </div>
                                                </Popup>
                                            )}
                                            <div
                                                className="bg-transparent h-10 w-10 z-100 translate-y-10"
                                                onMouseEnter={() => {
                                                    togglePinState(
                                                        currentFolder,
                                                        index
                                                    );
                                                }}
                                            ></div>

                                            {pinState[currentFolder] && (
                                                <Pin
                                                    fill={
                                                        pinState[currentFolder][
                                                            index
                                                        ]
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
                )}
        </>
    );
};

export default TripMap;
