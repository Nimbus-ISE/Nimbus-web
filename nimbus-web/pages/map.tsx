import { useEffect, useState, useRef, useCallback } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";
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
import useMediaQuery from "@/hooks/useMediaQuery";
import {
    getPlanTabDispatch,
    getPlanTabState,
} from "@/components/PlanTab/PlanTabContext";
import BigScreenPage from "@/components/PlanTab/Folders/BigScreenPage";
import SmallScreenPage from "@/components/PlanTab/Folders/SmallScreenPage";

export default function map() {
    const {
        mapRef,
        points,
        togglePinState,
        onSelect,
        geojson,
        layerStyle,
        pinState,
    } = useMap();

    const { isBigScreen } = getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
    const screenSize = useMediaQuery("(min-width:1000px)");

    useEffect(() => {
        dispatch({
            type: "SET_SCREEN_SIZE",
            payload: screenSize,
        });
        console.log(screenSize);
    }, [screenSize]);

    return (
        <>
            <Head>
                <title>Nimbus</title>
            </Head>
            <div className="h-[90vh] w-[100vw] overflow-hidden">
                <div
                    className={
                        isBigScreen
                            ? "grid place-items-center h-[90vh] z-50 bg-gray-300 text-black grid-cols-12 absolute w-full overflow-hidden"
                            : "  h-[92vh] z-50  bg-gray-300 text-black absolute w-full overflow-hidden gap-0"
                    }
                >
                    {!isBigScreen && <SmallScreenPage />}

                    {isBigScreen && <BigScreenPage />}

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
            </div>
        </>
    );
}
