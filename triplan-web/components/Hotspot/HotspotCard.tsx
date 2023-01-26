import React from "react";
import Image from "next/image";

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
            } ${current === index ? "hover:scale-105" : ""}
            absolute flex bg-sky-200 h-80 w-60 shadow-md duration-[700ms]
            ease-in-out cursor-pointer`}
            onClick={() => (current === index ? toggleCard(index) : null)}
        >
            <div
                className={`absolute flex top-0 bottom-0 left-0 right-0
                z-10 h-80 w-60 transform-gpu duration-500`}
            >
                <Image
                    className={`h-[95%] w-[95%] m-auto object-cover border-white border-[10px]`}
                    src={"http://localhost:3000/" + obj.image}
                    width={240}
                    height={320}
                    alt={obj.location}
                />
            </div>
            <div
                className={`${
                    expand[index] ? "scale-x-[150%] -translate-x-[120%]" : ""
                } absolute flex top-0 bottom-0 left-0 right-0 p-5 w-60 h-80 bg-gradient-to-r
                to-sky-200 from-lime-200 transform-gpu duration-500`}
            >
                <div
                    className={` ${
                        expand[index]
                            ? "scale-x-[66.66%] -translate-x-[12%] opacity-100"
                            : "opacity-0"
                    } absolute top-0 bottom-0 left-0 right-0 h-full transition duration-500 p-5`}
                >
                    <h1 className="font-extrabold text-3xl text-black">
                        {obj.placeName}
                    </h1>
                    <h2 className="font-bold text-xl text-black">{obj.city}</h2>
                    <p className="text-sm py-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates nobis eum, tenetur assumenda officia quisquam
                        nulla recusandae nisi asperiores quia
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HotspotCard;
