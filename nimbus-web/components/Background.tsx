import React from "react";

const Background = () => {
    return (
        <>
            <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 m-auto backdrop-blur-sm z-[2]" />
            <div
                className="absolute top-0 bottom-0 left-0 right-0 opacity-60 brightness-90
                        bg-gradient-to-r from-tricolorgreen to-yellow-300 z-10"
            />
        </>
    );
};

export default Background;
