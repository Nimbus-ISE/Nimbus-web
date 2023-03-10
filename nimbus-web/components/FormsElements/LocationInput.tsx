import React from "react";

const iconPlaceHolder = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
    </svg>
);

const LocationInput = (props: any) => {
    return (
        <input
            className="loc-input w-full text-l h-14 bg-gray-100 shadow-md appearance-none border-2 border-gray-100 rounded-xl py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-gray-100 hover:opacity-70"
            type="text"
            placeholder="Enter Location of Interest"
        />
    );
};

export default LocationInput;
