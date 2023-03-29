import React from "react";
import Star from "./Star";

const Stars = ({ size, rating }: { size: number; rating: number }) => {
    const calculatePercent = (index: number) => {
        const firstNumber = Math.floor(rating);
        if (index < firstNumber) {
            return "100%";
        } else if (index === firstNumber) {
            return `${(rating - firstNumber) * 100}%`;
        } else {
            return "0%";
        }
    };
    return (
        <div
            style={{
                width: size * 6 + 12,
                height: size,
            }}
            className="grid grid-cols-6 gap-0.5"
        >
            {[...Array(5)].map((item, index) => {
                return <Star size={size} percent={calculatePercent(index)} />;
            })}
            <div className="text-slate-500 text-sm mx-1 my-auto">
                ({rating})
            </div>
        </div>
    );
};

export default Stars;
