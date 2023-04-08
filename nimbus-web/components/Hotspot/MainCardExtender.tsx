import React from "react";
import Stars from "../Stars";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Review from "../MapPageComponents/Popups/Review";

interface IProps {
    obj: any;
    expand: Array<boolean>;
    index: number;
}

const MainCardExtender = ({ obj, expand, index }: IProps) => {
    return (
        <div
            className={`${
                expand[index] ? "scale-x-[150%] -translate-x-[120%]" : ""
            } absolute flex top-0 bottom-0 left-0 right-0 p-5 w-[15rem] h-full bg-gradient-to-l
            to-tricolorgreen from-green-300 transform-gpu duration-500`}
        >
            <div
                className={` ${
                    expand[index]
                        ? "scale-x-[66.66%] -translate-x-[12%] opacity-100"
                        : "opacity-0"
                } absolute w-[130%] top-0 bottom-0 left-0 right-0 h-full transition duration-500 p-5`}
            >
                <h1 className="font-extrabold text-3xl text-black">
                    {obj.loc_name}
                </h1>
                <div className="flex font-bold text-base text-neutral-800 py-1">
                    <LocationOnIcon />
                    Krung Thep Maha Nakhon
                </div>
                <Stars size={16} rating={obj.rating} />
                <p className="text-xs py-3">{obj.description}</p>
                <Review review={obj.reviews[0]} />
            </div>
        </div>
    );
};

export default MainCardExtender;
