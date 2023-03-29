import React from "react";
import StarIcon from "@mui/icons-material/Star";
interface IProps {
    size: number;
    percent: string;
}

const Star = ({ size, percent }: IProps) => {
    return (
        <div
            style={{
                width: size,
                height: size,
            }}
            className={`relative drop-shadow-sm`}
        >
            <div
                className={`absolute left-0 right-0 top-0 bottom-0 w-full h-full z-10`}
            >
                <div
                    style={{
                        width: percent,
                    }}
                    className={`overflow-hidden opacity-100`}
                >
                    <StarIcon
                        sx={{
                            width: size,
                            height: size,
                            color: "#F4C01E",
                        }}
                    />
                </div>
            </div>
            <StarIcon
                sx={{
                    width: size,
                    height: size,
                    color: "#d4d4d4",
                }}
            />
        </div>
    );
};

export default Star;
