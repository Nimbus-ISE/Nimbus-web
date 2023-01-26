import React from "react";
import Image from "next/image";

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
    const offsetCalculator = (add: number, index: number) => {
        const added = current !== index ? add / 5 : 0;
        return (
            added + ((places.length - current + index) % places.length) + "rem"
        );
    };
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
                            <>
                                <div
                                    style={{
                                        left: offsetCalculator(add, index),
                                        zIndex: z[index],
                                    }}
                                    className={`${
                                        transition && current === index
                                            ? "-translate-x-[80%] opacity-0"
                                            : "translate-x-0"
                                    } ${
                                        current === index
                                            ? "hover:scale-105"
                                            : ""
                                    }
                                    absolute flex bg-sky-200 h-80 w-60 shadow-md duration-[700ms]
                                    ease-in-out cursor-pointer`}
                                    onClick={() =>
                                        current === index
                                            ? toggleCard(index)
                                            : null
                                    }
                                >
                                    <div
                                        className={`absolute flex top-0 bottom-0 left-0 right-0
                                    z-10 h-80 w-60 transform-gpu duration-500`}
                                    >
                                        <Image
                                            className={`h-[95%] w-[95%] m-auto object-cover 
                                            border-white border-[10px]`}
                                            src={
                                                "http://localhost:3000/" +
                                                obj.image
                                            }
                                            width={240}
                                            height={320}
                                            alt={obj.location}
                                            unoptimized
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            expand[index]
                                                ? "scale-x-[150%] -translate-x-[120%]"
                                                : ""
                                        } absolute flex top-0 bottom-0 left-0 right-0 p-5 w-60 h-80 bg-gradient-to-r
                                        to-sky-200 from-lime-200 transform-gpu duration-500`}
                                    >
                                        <div
                                            className={` ${
                                                expand[index]
                                                    ? "scale-x-[66.66%] -translate-x-[12%] opacity-100"
                                                    : "opacity-0"
                                            } absolute top-0 bottom-0 left-0 right-0 h-full transition duration-500
                                            p-5`}
                                        >
                                            <h1 className="font-extrabold text-3xl text-black">
                                                {obj.placeName}
                                            </h1>
                                            <h2 className="font-bold text-xl text-black">
                                                {obj.city}
                                            </h2>
                                            <p className="text-sm py-5">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Voluptates nobis eum, tenetur
                                                assumenda officia quisquam nulla
                                                recusandae nisi asperiores quia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
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
