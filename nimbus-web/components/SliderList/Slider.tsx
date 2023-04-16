/* eslint-disable react-hooks/exhaustive-deps */
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import CardItem from "./CardItem";
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
    const containerSize = useElementSize(`slider-container-${title}`);
    const calculateWidth = () => {
        return -locationList.length * (16 + width) + containerSize.width;
    };
    const isForwardable = () => {
        return locationList.length * (16 + width) > containerSize.width;
    };
    const [widthCal, setWidthCal] = React.useState<number>(calculateWidth());

    const calculateOffset = (isForward: boolean) => {
        const distance = Math.floor(width * 2.5);
        const offset = isForward ? -distance : distance;
        if (widthCal > 0) {
            setDisable(true);
        } else if (calculatedOffset + offset >= 0) {
            setCalculatedOffset(0);
        } else if (calculatedOffset + offset <= widthCal) {
            setCalculatedOffset(widthCal);
        } else {
            setCalculatedOffset((prev) => prev + offset);
        }
    };
    React.useEffect(() => {
        setWidthCal(calculateWidth());
    }, [containerSize]);
    return (
        <div
            id={`slider-container-${title}`}
            className="h-full w-full md:w-[80%] mx-auto overflow-hidden text-black pt-5 pb-6 drop-shadow-sm"
        >
            <div className="px-5 font-montserrat font-bold text-3xl text-left">
                {title}
            </div>
            <div className="relative w-full">
                {isLargerThanMedium ? (
                    <>
                        {calculatedOffset !== 0 ? (
                            <button
                                onClick={() => calculateOffset(false)}
                                className="flex w-20 h-full bg-gradient-to-r from-neutral-100 to-transparent 
                                absolute -left-2 top-0 m-auto z-[9] group px-2"
                            >
                                <div
                                    className="flex w-12 h-12 bg-black rounded-full hover:bg-opacity-100 bg-opacity-60 
                                    absolute left-4 top-0 bottom-0 m-auto z-10 group px-2"
                                >
                                    <FontAwesomeIcon
                                        className="m-auto text-white drop-shadow-sm w-6 h-6 duration-500 transform-gpu"
                                        icon={faChevronLeft}
                                    />
                                </div>
                            </button>
                        ) : null}
                        {calculatedOffset !== widthCal && isForwardable() ? (
                            <button
                                onClick={() => calculateOffset(true)}
                                className="flex w-20 h-full bg-gradient-to-l from-neutral-100 to-transparent
                                absolute -right-2 top-0 bottom-0 m-auto z-10 group px-2"
                            >
                                <div
                                    className="flex w-12 h-12 bg-black rounded-full hover:bg-opacity-100 bg-opacity-60 
                                    absolute right-4 top-0 bottom-0 m-auto z-10 group px-2"
                                >
                                    <FontAwesomeIcon
                                        className="m-auto text-white drop-shadow-sm w-6 h-6 duration-500 transform-gpu"
                                        icon={faChevronRight}
                                    />
                                </div>
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
                            ? "overflow-x-scroll overflow-y-hidden hide-scrollbar"
                            : null
                    } w-full pt-5 md:pb-5 pb-10 flex transform-gpu duration-500`}
                >
                    {locationList.map((location: any, index) => {
                        return (
                            <CardItem
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
