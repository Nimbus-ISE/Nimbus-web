import React from "react";
import Star from "./Star";

const Stars = ({ size, rating }: { size: number; rating: number }) => {
    const calculatePercent = (index: number) => {
        const firstNumber = Number(rating.toString().slice(0, 1));
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
        </div>
    );
};

export default Stars;
