import React from "react";
import useMapLogic from "@/hooks/useMap";
import { getPlanTabState } from "../PlanTab/PlanTabContext";
import Pin from "@/components/Pin";
import Map, {
    Marker,
    ScaleControl,
    Layer,
    Source,
    AttributionControl,
    useMap,
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
    console.log(fullPlan);

    React.useEffect(() => {
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
                                                togglePinState(
                                                    currentFolder,
                                                    index
                                                );
                                                onSelect(point.lng, point.lat);
                                                e.originalEvent.stopPropagation();
                                            }}
                                        >
                                            <span className="text-center bg-black text-cyan-300 p-[2px] rounded">
                                                {
                                                    fullPlan[currentFolder]
                                                        .location_data[index]
                                                        .loc_name
                                                }
                                            </span>

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
