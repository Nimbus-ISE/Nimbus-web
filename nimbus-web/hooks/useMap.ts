import { useEffect, useState, useCallback, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapRef } from "react-map-gl";
import polyline from "@mapbox/polyline";
import React from "react";

import {
    getPlanTabDispatch,
    getPlanTabState,
} from "@/components/MapPageComponents/PlanTab/PlanTabContext";

interface reviewDataType {
    placeTitle: string;
    address: string;
    placeDescription: string;
}

const useMap = () => {
    // Interface data and functions
    const initialPinState: any = [];
    const [pinState, setPinState] = useState(initialPinState);
    const [openFullTab, setOpenFullTab] = useState(false);
    const [closed, setClosed] = useState(false);
    const [openReview, setOpenReview] = useState(false);
    const [reviewData, setReviewData] = useState({} as reviewDataType);
    const [openAlternatives, setOpenAlternative] = useState(false);
    const [fullPlan, setFullPlan] = useState({} as any);
    const { currentFolder, fullPlan: plan, map_polyline } = getPlanTabState();

    const toggleOpenReview = (reviewData?: reviewDataType) => {
        if (reviewData?.placeTitle) {
            setOpenReview(true);
            setReviewData(reviewData);
        } else {
            setOpenReview(false);
        }
    };

    const openTab = () => {
        setOpenFullTab(true);
        setClosed(false);
        setOpenAlternative(false);
        setOpenReview(false);
    };

    const closeFullTab = () => {
        setOpenFullTab(false);
        setClosed(true);
    };

    const toggleOpenAlternative = () => {
        setOpenAlternative(!openAlternatives);
    };

    // Map data and functions

    const [points, setPoints] = useState([] as any);

    const mapRef = React.useRef<mapboxgl.Map | null>(null);

    const onSelect = useCallback((longitude: number, latitude: number) => {
        mapRef.current?.flyTo({
            center: [longitude, latitude],
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        const tempPinState: any[] = [];
        plan.forEach((day: any) => {
            const tempPin: any = [];

            day.location_data?.forEach(() => {
                tempPin.push(false);
            });
            if (tempPinState.length < day.location_data?.length) {
                tempPinState.push(tempPin);
            }
        });

        setPinState(tempPinState);
    }, [currentFolder, plan]);

    const togglePinState = (day: number, changeIndex: number) => {
        pinState[day].forEach((_: any, index: any) => {
            if (index === changeIndex) {
                pinState[day][changeIndex] = true;
            } else {
                pinState[day][index] = false;
            }
        });

        setPinState([...pinState]);
    };

    const geojson: any = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "LineString",
                    coordinates: [...map_polyline],
                },
            },
        ],
    };

    const layerStyle: any = {
        id: "point",
        type: "line",
        paint: {
            "line-color": "#00CCCC",
            "line-width": 3,
        },
    };

    return {
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
        toggleOpenReview,
        openReview,
        reviewData,
        toggleOpenAlternative,
        openAlternatives,
        fullPlan,
    };
};
export default useMap;
