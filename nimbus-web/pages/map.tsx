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
import FolderSmall from "@/components/PlanTab/FolderSmall";
import FolderFull from "@/components/PlanTab/FolderFull";
import DayPlanOnFullTab from "@/components/PlanTab/DayPlanOnFullTab";

export default function map() {
    const {
        mapRef,
        points,
        togglePinState,
        onSelect,
        geojson,
        layerStyle,
        pinState,
        toggleOpenFullTab,
        openFullTab,
    } = useMap();
    return (
        <div className="grid place-items-center min-h-screen h-full pt-24 bg-green-300 text-black grid-cols-12">
            {!openFullTab && (
                <div className="col-span-4 h-full">
                    <FolderSmall />
                    <button
                        className="absolute bg-white top-[30rem] left-[29.5rem] p-2 h-20 rounded-r-xl z-10"
                        onClick={toggleOpenFullTab}
                    >
                        {">"}
                    </button>
                </div>
            )}
            {openFullTab && (
                <FolderFull>
                    <DayPlanOnFullTab />
                </FolderFull>
            )}
            {!openFullTab && (
                <div className="bg-rose-400 col-span-8 w-full h-full text-[10rem]">
                    MAP
                </div>
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
    );
}
