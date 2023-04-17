import * as React from "react";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
    cursor: "pointer",
    fill: "#d00",
    stroke: "none",
};

function Pin({ size = 30, fill = "#000", number = 0 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-map-pin cursor-pointer"
        >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>

            <text
                x={number >= 10 ? "4.5" : "8.5"}
                y="15"
                stroke="white"
                font-weight="lighter"
                font-family="monospace"
            >
                {number}
            </text>
        </svg>
    );
}

export default React.memo(Pin);
