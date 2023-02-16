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
import PlaceDetail from "@/components/PlanTab/PlaceDetail";
import SideBar from "@/components/PlanTab/SideBar";
import FullScreenPlan from "@/components/PlanTab/FullScreenPlan";
import Alternative from "@/components/PlanTab/Alternative";

export default function map() {
    const {
        mapRef,
        points,
        togglePinState,
        onSelect,
        geojson,
        layerStyle,
        pinState,
        openTab,
        closeFullTab,
        closed,
        openFullTab,
        openReview,
        toggleOpenReview,
        reviewData,
        openAlternatives,
        toggleOpenAlternative,
    } = useMap();
    const [isBigScreen, setIsBigScreen] = useState(false);
    useEffect(() => {
        setIsBigScreen(screen.width >= 1384);
    }, []);

    return (
        <div>
            <div
                className={
                    isBigScreen
                        ? "grid place-items-center  z-50 bg-gray-300 text-black grid-cols-12 absolute w-full overflow-hidden"
                        : "flex flex-col  place-items-center  z-50 bg-gray-300 text-black absolute w-full overflow-hidden gap-0"
                }
            >
                {!isBigScreen && !openFullTab && (
                    <div
                        className={
                            isBigScreen
                                ? "bg-rose-400 w-full h-[100%] text-[10rem] "
                                : "bg-rose-400 w-full h-[24.7rem] text-[10rem] "
                        }
                    >
                        MAP
                    </div>
                )}
                {!openFullTab && (
                    <SideBar
                        isBigScreen={isBigScreen}
                        toggleOpenReview={toggleOpenReview}
                        openTab={openTab}
                        openAlternatives={toggleOpenAlternative}
                    />
                )}
                {openFullTab && !isBigScreen && (
                    <div>
                        <SideBar
                            isBigScreen={isBigScreen}
                            toggleOpenReview={toggleOpenReview}
                            openTab={openTab}
                            openAlternatives={toggleOpenAlternative}
                            openFullTab={openFullTab}
                            closeFullTab={closeFullTab}
                        />
                    </div>
                )}

                {openFullTab && !closed && isBigScreen && (
                    <FullScreenPlan
                        openFullTab={openFullTab}
                        closeFullTab={closeFullTab}
                        openAlternatives={toggleOpenAlternative}
                        isBigScreen={isBigScreen}
                    />
                )}

                {!openFullTab && isBigScreen && (
                    <div className="col-span-8 w-full h-[100%]">
                        {openReview && (
                            <div className=" bg-[#3e4560] bg-opacity-50 w-full h-full fixed ">
                                <PlaceDetail
                                    placeTitle={reviewData.placeTitle}
                                    address={reviewData.address}
                                    placeDescription={
                                        reviewData.placeDescription
                                    }
                                    toggleOpenReview={toggleOpenReview}
                                    isBigScreen={isBigScreen}
                                />
                            </div>
                        )}

                        {!openReview && openAlternatives && (
                            <div className=" bg-[#3e4560] bg-opacity-50 w-full h-full fixed bottom-0">
                                <Alternative />
                            </div>
                        )}
                    </div>
                )}
                {!openFullTab && !isBigScreen && (
                    <div>
                        {openReview && (
                            <div className=" bg-[#3e4560] bg-opacity-50 top-32 fixed ">
                                <PlaceDetail
                                    placeTitle={reviewData.placeTitle}
                                    address={reviewData.address}
                                    placeDescription={
                                        reviewData.placeDescription
                                    }
                                    toggleOpenReview={toggleOpenReview}
                                    isBigScreen={isBigScreen}
                                />
                            </div>
                        )}
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
        </div>
    );
}
