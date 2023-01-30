import React from "react";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import MainCardExtender from "./MainCardExtender";
import MobileCardExtender from "./MobileCardExtender";

interface IProps {
    obj: any;
    places: Array<unknown>;
    add: number;
    z: Array<string>;
    expand: Array<boolean>;
    transition: boolean;
    current: number;
    index: number;
    toggleCard: (index: number) => void;
}

const HotspotCard = ({
    obj,
    places,
    add,
    z,
    expand,
    transition,
    current,
    index,
    toggleCard,
}: IProps) => {
    const isLargerThanMedium = useMediaQuery("(min-width: 768px)");
    const offsetCalculator = (add: number, index: number) => {
        const added = current !== index ? add / 5 : 0;
        return (
            added + ((places.length - current + index) % places.length) + "rem"
        );
    };
    return (
        <div
            style={{
                left: offsetCalculator(add, index),
                zIndex: z[index],
            }}
            className={`${
                transition && current === index
                    ? "-translate-x-[80%] opacity-0"
                    : "translate-x-0"
            } ${current === index ? "md:hover:scale-105" : ""}
            absolute flex bg-gradient-to-r to-tricolorgreen from-lime-200
             md:from-tricolorgreen md:to-tricolorgreen h-80 w-60 shadow-md duration-[700ms]
            ease-in-out cursor-pointer `}
            onClick={() => (current === index ? toggleCard(index) : null)}
        >
            <div
                className={`absolute flex top-0 bottom-0 left-0 right-0
                z-10 h-80 w-60 transform-gpu duration-500`}
            >
                <Image
                    className={`h-[95%] w-[95%] m-auto object-cover border-white border-[10px]`}
                    src={obj.image}
                    width={240}
                    height={320}
                    alt={obj.location}
                />
            </div>
            {isLargerThanMedium ? (
                <MainCardExtender obj={obj} expand={expand} index={index} />
            ) : (
                <MobileCardExtender obj={obj} expand={expand} index={index} />
            )}
        </div>
    );
};

export default HotspotCard;
