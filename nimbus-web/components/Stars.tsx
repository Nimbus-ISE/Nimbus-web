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
        <div className="flex">
            {[...Array(5)].map((item, index) => {
                return <Star size={size} percent={calculatePercent(index)} />;
            })}
            <div className="text-slate-500 text-sm my-auto mx-2">
                ({rating})
            </div>
        </div>
    );
};

export default Stars;
