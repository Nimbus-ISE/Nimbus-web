import useElementSize from "@/hooks/useElementSize";
import React from "react";
import * as Scroll from "react-scroll";

interface IProps {
    active: boolean;
    size: number;
    index: number;
    name: string;
}

const Node = ({ size, active, index, name }: IProps) => {
    const pageSize = useElementSize("input-container");
    const handleOnClick = () => {
        const scroll = Scroll.animateScroll;
        scroll.scrollTo(index * pageSize.height, {
            duration: 1000,
            smooth: true,
            containerId: "form-container",
        });
    };
    return (
        <button
            onClick={handleOnClick}
            style={{
                height: size,
                width: size,
            }}
            className={`${
                active ? "border-cyan-500" : "border-neutral-300"
            } relative flex border-[4px] bg-white rounded-full 
            transition duration-500 z-[2] text-neutral-600`}
        >
            <div className="absolute top-0 bottom-0 left-12 my-auto h-fit">
                {name}
            </div>
            <div className="m-auto">{index + 1}</div>
        </button>
    );
};

export default Node;
