import { useEffect, useState, useCallback } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapRef } from "react-map-gl";
import polyline from "@mapbox/polyline";
import React from "react";
import { testData } from "@/test_data/testData";

interface reviewDataType {
    placeTitle: string;
    address: string;
    placeDescription: string;
}

const useMap = () => {
    const points: any = {
        start: {
            coordinates: { lat: 13.746389, lng: 100.535004 },
            location: "Siam Center",
            province: "Bangkok",
            image: "https://cdn.britannica.com/57/20057-004-404C9F85/Grand-Palace-Bangkok-Thailand.jpg",
        },
        end: {
            coordinates: { lat: 12.5324, lng: 99.9613 },
            location: "Vana Nava Waterpark",
            province: "Prachuap Khiri Khan",
            image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_871/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/fpwqzr45vjmfzvr6hdkw/VanaNavaWaterparkTicketinHuaHin.webp",
        },
    };
    const initialPinState: Array<string> = [];
    Object.keys(points).forEach(() => {
        initialPinState.push("#000");
    });
    const mapRef = React.useRef<MapRef>();
    const [route, setRoute] = useState([] as Array<number[]>);
    const [openFullTab, setOpenFullTab] = useState(false);
    const [closed, setClosed] = useState(false);
    const [pinState, setPinState] = useState(initialPinState);
    const [openReview, setOpenReview] = useState(false);
    const [reviewData, setReviewData] = useState({} as reviewDataType);

    const toggleOpenReview = (reviewData?: reviewDataType) => {
        console.log(reviewData);

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
        setOpenReview(false);
    };
    const closeFullTab = () => {
        setOpenFullTab(false);
        setClosed(true);
    };

    const onSelect = useCallback((longitude: number, latitude: number) => {
        console.log("called");
        mapRef.current?.flyTo({
            center: [longitude, latitude],
            duration: 1000,
        });
    }, []);

    const togglePinState = (changeIndex: number) => {
        pinState.forEach((_, index) => {
            if (index === changeIndex) {
                pinState[changeIndex] = "#45D8D0";
            } else {
                pinState[index] = "#000";
            }
        });

        setPinState([...pinState]);
    };

    useEffect(() => {
        // const fetchRoute = async () => {
        //     const res = await fetch(
        //         `http://localhost:3000/api/getRoute?origin=${
        //             startMarker.latitude
        //                 ? startMarker.latitude
        //                 : points.start.coordinates.lat
        //         },${
        //             startMarker.longitude
        //                 ? startMarker.longitude
        //                 : points.start.coordinates.lng
        //         }&destination=${points.end.coordinates.lat},${
        //             points.end.coordinates.lng
        //         }`
        //     );
        //     const coordinates = await res.json();
        //     return coordinates;
        // };

        const routeArrs: any = [];
        // fetchRoute().then((route) => {});
        const decoded = polyline.decode(
            "}x{rAk{rdRhD`@\\iAlFp@r[nCp[fCxPnAnGbA_BfFqB`GaDtJiHfVgEzMcBxFUbAhCrE~BfFvBtClGjCbTlAtSIhRkAdg@uJhHs@xMRtY`FzMpAtJMrKyB`OeIpL{M|KgMjIyFdCLfDjCdCtEhFnEfWpRzZxTvt@fi@pIvKhCnIr@rHk@l[cBbg@yHn^}Nxk@uCjJaDbFkFbEqJ`DkE~AoAzC`A|JfJ`g@dJjTzMtWvMlWroAbdCzVpe@de@xr@xk@l{@rOzTdXjYlgDneDfuAbtAnFhGfDhHnB|KHlOQ~K_@vYUdNShm@dFrWxGxVdPbk@pPpm@`Zbt@x_Aj{BtWnm@bTdXvlA`sA|VhYlIbRtBvOrBj`@lD`n@bBtPdFzV~\\nxAdYflAbg@`vBbl@ddCjt@roDvKhi@hCfJnInLrJlFtXvGba@jJv_AtTjb@|JlLtDxG`E`JjJ~[|i@|GtLjg@b|@nx@nuArb@pt@`c@p}@n|@jjB~Znn@z_@xa@f^|^`W`Znf@fx@vZ`f@xYpYbcAzcAzE~IlBzL]tcA^`KvCxLxFdJ`PlUhK~NlOnS~Vl^zp@|_A~RhY~EzM|H`p@~RfkBja@biCbLhu@pAl}@d@jk@pFrb@lFv\\bD~TlAf`@zBr~@|B`e@xBdBtCh@dOlAxc@~FpfAhKdzAfPv}BpUz[dD`QfBtN`@|\\aG`]gGx`@iHjNeCle@_HzJdA~Q|BzU~ChW`DzbAkIb{AwJtQeAjXqFzh@_LbkAcVd`@qItd@oNpd@kN~]mLdd@cYd}Ai`ApKmBzQkCtLoEnLoKxHwIhSwk@~JoTjCcEtBaEx@_IX}IbByNhGm\\~Mct@lOa}@xLsiA`I}t@zAaNvCcKxDoEpJcFxV{IxWmJtq@aVxm@gTha@oQjYgLvHu@pG`@jYlElQdCpdAtOdZnNp\\fQf_Aff@|xA~u@zoFdrCrL~FnFlAhF?tUsBfMaAzh@iEpU}AplAuJl{AaMruDoZv~BcRtZgCbX_Hr^}LpiB}m@lx@gXhjBan@|oBup@jFwCrFqI~Ro[~DoIa@m_@s@eYWcS~Dga@jAeGvB_DdD_BjHIpPdChWpDpWxDp}Bb\\rpFdu@hqAnPhSxBjb@Zxq@d@rcCpBz{BxAbh@p@lS`@lOlGfHbEdEv@dY|@t`@~@`d@}LxEa@|{@tApfAxAvkAnBjNaA~LoBnn@oJhc@mHlb@qQtQeEzTuJhViD~MyAdg@qF~{@sJvI{@vFb@jB`BvAjG`BnJxB~BpFTrKuCvIcB?i@He@"
        );

        decoded.forEach((arr) => {
            routeArrs.push(arr.reverse());
        });
        setRoute(routeArrs);
    }, []);
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
    };
};
export default useMap;
