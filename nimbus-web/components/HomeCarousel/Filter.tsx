import React from "react";

interface IProps {
    color: string;
    className?: any;
}

const Filter = ({ color, className }: IProps) => {
    return (
        <>
            <div
                style={className}
                className={`absolute top-0 bottom-0 left-0 right-0 
                bg-gradient-to-t from-black to-transparent z-10`}
            />
            <div
                className={`absolute top-0 bottom-0 left-0 right-0 ${color} opacity-10 z-10`}
            />
        </>
    );
};

export default Filter;
