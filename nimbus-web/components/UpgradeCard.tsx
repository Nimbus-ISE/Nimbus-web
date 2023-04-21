import React from "react";

interface IProps {
    backgroundColor: string;
    color: string;
    planName: string;
    priceStr: string;
    list: Array<string>;
    value: "Monthly" | "Yearly" | "None";
    onClickCallback: (type: "Monthly" | "Yearly") => any;
}

const UpgradeCard = ({
    planName,
    backgroundColor,
    color,
    priceStr,
    list,
    value,
    onClickCallback,
}: IProps) => {
    return (
        <div
            style={{
                color: color,
            }}
            className="relative flex flex-col justify-between md:w-[18rem] h-[25rem]
            p-4 backdrop-blur-lg rounded-3xl z-10 bg-transparent w-[80vw]"
        >
            <div
                style={{
                    backgroundColor: backgroundColor,
                    opacity: 0.6,
                }}
                className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-3xl 
                drop-shadow-md p-4 -z-[5]"
            />
            <div
                style={{
                    borderColor: color,
                }}
                className="border-b pb-4 w-full text-center"
            >
                {planName}
            </div>
            {priceStr === "FREE" ? (
                <div className="text-4xl font-extrabold text-center w-full">
                    {priceStr}
                </div>
            ) : (
                <div className="flex text-5xl font-bold p-5 w-full">
                    <div className="relative flex mx-auto">
                        {priceStr}
                        <div className="absolute -right-[2.3rem] bottom-0 text-base font-semibold ml-1">
                            /mo
                        </div>
                    </div>
                </div>
            )}
            <ul className="flex flex-col mx-auto gap-2">
                {list.map((item) => (
                    <li key={item} className="font-semibold text-sm">
                        {item}
                    </li>
                ))}
            </ul>
            {value !== "None" ? (
                <button
                    onClick={() => onClickCallback(value)}
                    className="rounded-2xl bg-black bg-opacity-50 p-3 font-semibold 
                    hover:bg-opacity-40 transition duration-100"
                >
                    CHOOSE PLAN
                </button>
            ) : (
                <div className="p-3" />
            )}
        </div>
    );
};

export default UpgradeCard;
