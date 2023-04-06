import useElementSize from "@/hooks/useElementSize";
import React from "react";

interface IProps {
    height: number;
    ratio: number;
}

const ProgressBar = ({ height, ratio }: IProps) => {
    return (
        <div
            style={{ height: height }}
            className="absolute w-[5px] bg-neutral-200 top-0 bottom-0 my-auto shadow-sm"
        >
            <div className="relative h-full w-full">
                <div
                    style={{
                        transform: `scaleY(${ratio})`,
                        transformOrigin: "top",
                        height: height,
                    }}
                    className="absolute w-full bg-tricolorgreen z-[1] transition duration-500"
                ></div>
                <div
                    style={{
                        transform: `translateY(${Math.floor(ratio * 100)}%)`,
                        transformOrigin: "top",
                    }}
                    className="relative h-full w-full"
                >
                    <div
                        className="absolute top-0 -left-[2.5px] aspect-square w-[10px] h-[10px]
                     bg-tricolorgreen rounded-full transition duration-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
