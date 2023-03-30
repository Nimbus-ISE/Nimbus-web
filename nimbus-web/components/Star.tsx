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
            className={`relative drop-shadow-sm my-auto`}
        >
            <div
                className={`absolute left-0 right-0 top-0 bottom-0 w-full h-full z-10`}
            >
                <div
                    style={{
                        height: size,
                        width: percent,
                    }}
                    className={`overflow-hidden opacity-100`}
                >
                    <svg
                        className="fill-yellow-400"
                        style={{
                            width: size,
                            height: size,
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                </div>
            </div>
            <svg
                className="fill-neutral-300"
                style={{
                    width: size,
                    height: size,
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
        </div>
    );
};

export default Star;
