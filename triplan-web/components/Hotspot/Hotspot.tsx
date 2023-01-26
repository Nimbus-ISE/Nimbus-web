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
            <div className="grid grid-flow-col gap-2 m-auto z-30">
                <div className="w-80 h-80 bg-white text-center shadow-md m-auto rounded-xl">
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
                <div className="relative">
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
                </div>
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
                    className="bg-black opacity-0 ml-[14.5rem] w-20 h-full z-40 
                    duration-500 cursor-pointer"
                ></div>
            </div>
        </div>
    );
};

export default Hotspot;
