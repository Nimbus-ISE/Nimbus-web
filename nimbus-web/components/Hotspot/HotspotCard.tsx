import React from "react";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import MainCardExtender from "./MainCardExtender";
import MobileCardExtender from "./MobileCardExtender";
import NimbusStamp from "../NimbusStamp";

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
            } ${current === index ? "md:hover:translate-y-3" : ""}
            absolute flex bg-gradient-to-l to-tricolorgreen from-green-300 transform-gpu
             md:from-green-300 md:to-green-300 h-full w-[18rem] shadow-md duration-[700ms]
            ease-in-out cursor-pointer`}
            onClick={() => (current === index ? toggleCard(index) : null)}
        >
            <div
                className={`absolute flex top-0 bottom-0 left-0 right-0
                z-10 h-full w-[18rem] transform-gpu duration-500`}
            >
                <div className="absolute top-6 right-5">
                    <NimbusStamp />
                </div>
                <Image
                    className={`h-[95%] w-[95%] m-auto object-cover border-white border-[10px]`}
                    src={obj.url}
                    width={240}
                    height={320}
                    alt={obj.loc_name}
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
