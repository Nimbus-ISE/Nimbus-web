import React from "react";
import { PlanContext } from "../Plan";
import SearchBar from "../Search/SearchBar";

/*const iconPlaceHolder = (
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
);*/

const LocationInput = () => {
    const { setFormDataField } = React.useContext(PlanContext);
    //const inputRef = React.useRef<any>();
    /*const handleOnChange = () => {
        if (inputRef.current)
            setFormDataField("location", inputRef.current.value);
    };*/
    const handleValueCallback = (loc_name: string, loc_id: number) => {
        setFormDataField("locationId", loc_id);
    };
    /*React.useEffect(() => {
        if (formData.location) inputRef.current.value = formData.location;
    }, []);*/
    return (
        <SearchBar
            valueCallback={handleValueCallback}
            className="relative flex justify-between text-black my-auto w-full max-w-[30rem] h-12 text-sm z-10"
            inputClassName="w-full h-full bg-gray-100 shadow-md
            rounded-xl px-8 text-neutral-700 leading-tight border-[1px]
            hover:opacity-70 transition"
        />
        /*<input
            ref={inputRef}
            onChange={handleOnChange}
            className="loc-input w-full text-l h-14 bg-gray-100 shadow-md appearance-none
            border-2 border-gray-100 rounded-xl py-2 px-4 text-gray-500 leading-tight 
            focus:outline-none focus:bg-gray-100 hover:opacity-70 max-w-[30rem]"
            type="text"
            placeholder="Enter Location of Interest"
        />*/
    );
};

export default LocationInput;
