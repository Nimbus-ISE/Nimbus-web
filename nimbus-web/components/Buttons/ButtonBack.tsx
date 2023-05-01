import React from "react";

const ButtonBack = ({ onClick, className }: any) => {
    return (
        <button
            onClick={onClick}
            className={`text-neutral-800 font-bold py-0 px-1 h-10 rounded-xl hover:scale-105 duration-300 ${className}`}
            style={{ backgroundColor: "white" }}
        >
            <div className="flex justify-start items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    strokeWidth={1.0}
                    stroke="currentColor"
                    className="w-2.5 h-2.5 rotate-180"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                </svg>
                <p className="">&nbsp;BACK</p>
            </div>
        </button>
    );
};

export default ButtonBack;
