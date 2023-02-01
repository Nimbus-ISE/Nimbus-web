import useElementSize from "@/hooks/useElementSize";
import React from "react";

interface IProps {
    height: number;
    percent: number;
}

const ProgressBar = ({ height, percent }: IProps) => {
    return (
        <div
            style={{ height: height }}
            className="absolute w-[5px] bg-neutral-300"
        >
            <div className="relative h-full w-full">
                <div
                    style={{
                        height: percent + "%",
                    }}
                    className="absolute w-full bg-cyan-500 z-[1]"
                >
                    <div className="relative h-full w-full">
                        <div className="absolute -left-[2.5px] -bottom-[2.5px] w-[10px] h-[10px] bg-cyan-500 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
