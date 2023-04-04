import { useEffect, useState, useCallback, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapRef } from "react-map-gl";
import polyline from "@mapbox/polyline";
import React from "react";

import {
    getPlanTabDispatch,
    getPlanTabState,
} from "@/components/PlanTab/PlanTabContext";

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
    const { currentFolder, fullPlan: plan } = getPlanTabState();
    const isMounted = useRef(false);
    const dispatch: any = getPlanTabDispatch();

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

    const mapRef = React.useRef<MapRef>();
    const [route, setRoute] = useState([] as any);

    const onSelect = useCallback((longitude: number, latitude: number) => {
        mapRef.current?.flyTo({
            center: [longitude, latitude],
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        // const fetchRoute = async () => {
        //     const res = await fetch(`api/getRoute?day=${currentFolder}`);
        //     const result = await res.json();
        //     return result;
        // };
        // fetchRoute().then((route) => {
        //     const decoded = polyline.decode(route);
        //     const routeArrs: any = [];
        //     decoded.forEach((arr) => {
        //         routeArrs.push(arr.reverse());
        //     });
        //     setRoute(routeArrs);
        // });
        // const decoded = polyline.decode(
        //     "kgzrAserdRRPBLANMTKDM?KCKEIYAE@C[CsBQFkAF}@R_@LKHGLuAPaB@QDEHA|BPHcA@GBKJKLERGtF^lIp@tDRnDXvLdAxAkEpAwDb@cB^sAUMiDeAuBo@e@QBMDKtA`@dAZxC~@\\GZI`AeDvDuLh@qAjAuDhAsDn@}B|AaF@GW{AGWYEyDe@iFc@aIy@wHu@kAM_DWuBQKFKJAHAj@QpMM`KKxEApCE`AGjAA\\SEwA_@i@KqBU}Ea@yNkAiIo@mFc@sBQcAOkBSgDYWAc@K_Fe@_Fc@qD_@eCSqCScAKa@PQLI\\ELYlAs@jCc@dBUn@ORC@ITCLGVc@dBsAfFuBhIe@tBU|@U`ABJE^Mj@s@pCs@jCTf@`@DzGd@pBPtGj@vGh@pAJfA@bBHbD^`Jt@`Hh@jGd@vOnAfNlA~F`@rHr@hBJj@DAHGNi@E}AQiKy@mEa@BOlEXrGj@lBPh@UlAs@b@YLg@t@oCvAaFj@cBxAwEt@qB_EY{LcAgM{@aMcAyX}B_MmAm@GSTCNOtAIz@CZ"
        // );
        //     }
        // const fetchTrip = async () => {
        //     const res = await fetch(`http://localhost:3000/api/getTrip`);
        //     const plan = await res.json();
        //     return plan;
        // };
        // fetchTrip().then((trip) => {
        //     dispatch({
        //         type: "SET_FULL_PLAN",
        //         payload: trip.result,
        //     });
        //     const tempPinState: any[] = [];
        //     trip.result.forEach((day: any) => {
        //         const tempPin: any = [];
        //         day.forEach(() => {
        //             tempPin.push("#000");
        //         });
        //         if (tempPinState.length < trip.result.length) {
        //             tempPinState.push(tempPin);
        //         }
        //     });
        //     setPoints(trip.points);
        //     setPinState(tempPinState);
        // });
    }, [currentFolder]);

    // useEffect(() => {
    //     if (isMounted.current) {
    //         const tempPoints: any = [];
    //         plan.forEach((day: any) => {
    //             const temp: any = [];
    //             day.forEach((points: any) => {
    //                 temp.push(points.coordinate);
    //             });
    //             tempPoints.push(temp);
    //         });
    //         setPoints(tempPoints);
    //     } else {
    //         isMounted.current = true;
    //     }
    // }, [plan]);

    const togglePinState = (day: number, changeIndex: number) => {
        pinState[day].forEach((_: any, index: any) => {
            if (index === changeIndex) {
                pinState[day][changeIndex] = "#45D8D0";
            } else {
                pinState[day][index] = "#000";
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
                    coordinates: [...route],
                },
            },
        ],
    };

    const layerStyle: any = {
        id: "point",
        type: "line",
        paint: {
            "line-color": "#15cc09",
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
