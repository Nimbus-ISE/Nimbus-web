import React from "react";
import Image from "next/image";
import HotspotCard from "./HotspotCard";

const Hotspot = (props: any) => {
    const [places] = React.useState<Array<any>>(Object.values(props));
    const [expand, setExpand] = React.useState<Array<boolean>>(
        Object.keys(props).map((index) => false)
    );
    const [current, setCurrent] = React.useState<number>(0);
    const [add, setAdd] = React.useState<number>(0);
    const [transition, setTransition] = React.useState<boolean>(false);
    const [z, setZ] = React.useState<Array<string>>(
        Object.keys(props).map((index) => "-" + index)
    );
    const calculateZIndexes = () => {
        setZ((prev: any) => {
            prev.unshift(prev[prev.length - 1]);
            prev = prev.slice(0, prev.length - 1);
            return prev;
        });
    };
    const toggleCard = (index: number) => {
        setExpand((prev) => {
            const newArr = [...prev];
            newArr[index] = !newArr[index];
            return newArr;
        });
    };
    React.useEffect(() => {
        if (current !== 0 && !expand[current])
            setTimeout(() => toggleCard(current), 200);
    }, [current]);
    return (
        <div className="relative flex text-black h-[30rem]">
            <div className="flex flex-col md:flex-row m-auto z-30 justify-center p-1 w-full">
                <div className="w-full max-w-[20rem] h-80 bg-white text-center shadow-md m-auto md:m-1 rounded-xl">
                    <h1 className="text-5xl font-extrabold p-5">
                        ICONIC PLACES
                    </h1>
                    <p className="text-sm px-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates nobis eum, tenetur assumenda officia quisquam
                        nulla recusandae nisi asperiores quia quam maxime
                        quibusdam nesciunt ea! Beatae corrupti saepe
                        reprehenderit voluptatum.
                    </p>
                </div>
                <div className="relative w-full max-w-[20rem] h-80 m-auto mt-2 md:m-1">
                    {places.map((obj: any, index: number) => {
                        return (
                            <HotspotCard
                                obj={obj}
                                index={index}
                                places={places}
                                expand={expand}
                                current={current}
                                add={add}
                                z={z}
                                transition={transition}
                                toggleCard={toggleCard}
                            />
                        );
                    })}
                    <div
                        onMouseEnter={() => setAdd(10)}
                        onMouseLeave={() => setAdd(0)}
                        onClick={() => {
                            if (expand[current]) toggleCard(current);
                            setTransition(true);
                            setTimeout(() => {
                                calculateZIndexes();
                                setCurrent((prev) => {
                                    if (prev + 1 === expand.length) return 0;
                                    return prev + 1;
                                });
                                setTransition(false);
                            }, 500);
                        }}
                        className="absolute left-[15rem] bg-pink-500 opacity-50 w-20 h-full z-40 
                        duration-500 cursor-pointer"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Hotspot;
