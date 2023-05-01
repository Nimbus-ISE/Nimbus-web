import React from "react";
import { PlanContext } from "../Plan";
import SearchBar from "../Search/SearchBar";
import Cookies from "js-cookie";

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
    const { formData, setFormDataField } = React.useContext(PlanContext);
    const [locationValue, setLocationValue] = React.useState<string>();
    const handleValueCallback = (loc_name: string, loc_id: number) => {
        setFormDataField("locationId", [loc_id, loc_name]);
    };
    React.useEffect(() => {
        const locationInfo = Cookies.get("location_info")?.split("|");
        if (locationInfo) {
            setLocationValue(locationInfo[1]);
            console.log("setLocationId", [
                Number(locationInfo[0]),
                locationInfo[1],
            ]);
            setTimeout(
                () =>
                    setFormDataField("locationId", [
                        Number(locationInfo[0]),
                        locationInfo[1],
                    ]),
                500
            );
            Cookies.remove("location_info");
        } else if (formData.locationId) {
            setLocationValue(formData.locationId[1]);
        }
    }, []);
    return (
        <SearchBar
            valueCallback={handleValueCallback}
            className="relative flex justify-between text-neutral-800 my-auto w-full max-w-[30rem] h-12 text-sm z-10"
            inputClassName="w-full h-full bg-gray-100 shadow-md
            rounded-xl px-8 text-neutral-700 leading-tight border-[1px]
            hover:opacity-70 transition"
            disableNavigate
            value={locationValue}
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
