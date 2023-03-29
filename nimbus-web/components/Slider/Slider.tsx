/* eslint-disable react-hooks/exhaustive-deps */
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProfileCard from ".";
import useElementSize from "@/hooks/useElementSize";

interface IProps {
    title: string;
    locationList: Array<any>;
    shape: "rectangle" | "circle";
    onClickCallback: (id: number) => void;
}

const Slider = ({ title, locationList, shape, onClickCallback }: IProps) => {
    const isLargerThanMedium = useMediaQuery("(min-width: 786px)");
    const [calculatedOffset, setCalculatedOffset] = React.useState<number>(0);
    const [disable, setDisable] = React.useState<boolean>(false);
    const { width } = useElementSize(title);
    const widthCal =
        -locationList.length * (16 + width) - 60 + window.innerWidth;
    const calculateOffset = (isForward: boolean) => {
        const offset = isForward
            ? -window.innerWidth / 1.2
            : window.innerWidth / 1.2;
        if (widthCal > 0) {
            setDisable(true);
        } else if (calculatedOffset + offset > 0) {
            setCalculatedOffset(0);
        } else if (calculatedOffset + offset < widthCal) {
            setCalculatedOffset(widthCal);
        } else {
            setCalculatedOffset((prev) => prev + offset);
        }
    };
    return (
        <div className="h-full w-full text-black my-1 drop-shadow-sm">
            <div className="px-5 font-montserrat font-bold text-3xl text-left">
                {title}
            </div>
            <div className="relative w-full">
                {isLargerThanMedium ? (
                    <>
                        {calculatedOffset !== 0 ? (
                            <button
                                onClick={() => calculateOffset(false)}
                                className="absolute left-0 top-0 bottom-0 h-full z-10 group px-2"
                            >
                                <FontAwesomeIcon
                                    className="text-white drop-shadow-sm w-10 h-10 group-hover:opacity-100 group-hover:scale-110 duration-500 transform-gpu opacity-60"
                                    icon={faChevronCircleLeft}
                                />
                            </button>
                        ) : null}
                        {calculatedOffset !== widthCal ? (
                            <button
                                onClick={() => calculateOffset(true)}
                                className="absolute right-0 top-0 bottom-0 z-10 group px-2"
                            >
                                <FontAwesomeIcon
                                    className="text-white drop-shadow-sm w-10 h-10 group-hover:opacity-100 hover:scale-110 duration-500 transform-gpu opacity-60"
                                    icon={faChevronCircleRight}
                                />
                            </button>
                        ) : null}
                    </>
                ) : null}
                <div
                    style={{
                        transform:
                            !disable && isLargerThanMedium
                                ? `translateX(${calculatedOffset}px)`
                                : "",
                    }}
                    className={`${
                        !isLargerThanMedium
                            ? "overflow-x-scroll hide-scrollbar"
                            : null
                    } w-full p-5 flex transform-gpu duration-500`}
                >
                    {locationList.map((location: any, index) => {
                        return (
                            <ProfileCard
                                id={location.loc_id}
                                key={index}
                                name={location.loc_name}
                                title={title}
                                shape={shape}
                                image={location.url}
                                onClick={onClickCallback}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Slider;
