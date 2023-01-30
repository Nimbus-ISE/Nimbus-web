import React from "react";

interface IProps {
    obj: any;
    expand: Array<boolean>;
    index: number;
}

const MobileCardExtender = ({ obj, expand, index }: IProps) => {
    return (
        <div
            className={`${
                expand[index]
                    ? "scale-y-[100%] translate-y-0 z-10"
                    : "scale-y-0 translate-y-[10rem] z-10"
            } absolute flex top-0 bottom-0 left-0 right-0 p-5 w-60 h-80 bg-gradient-to-r
            to-tricolorgreen from-lime-200 transform-gpu duration-500`}
        >
            <div
                className={` ${
                    expand[index] ? "scale-y-[100%] opacity-100" : "opacity-0"
                } absolute top-0 bottom-0 left-0 right-0 transition duration-500 p-5`}
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
    );
};

export default MobileCardExtender;
