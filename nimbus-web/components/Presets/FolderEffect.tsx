import React from "react";

const books = [
    {
        src: "/images/bg.webp",
        name: "bg-emerald-500",
    },
    {
        src: "/images/ThorsWell.jpg",
        name: "bg-sky-500",
    },
    {
        src: "/images/BlackHole.jpg",
        name: "bg-orange-500",
    },
    {
        src: "/images/db11.jpg",
        name: "bg-yellow-500",
    },
    {
        src: "/images/bg.webp",
        name: "bg-emerald-500",
    },
];

const FolderEffect = () => {
    const [indexBound, setIndexBound] = React.useState<Array<number>>([0, 2]);
    const changePage = (isIncrement: boolean) => {
        setIndexBound((prev) => {
            const newArr = [...prev];
            newArr[0] = isIncrement ? prev[0] + 3 : prev[0] - 3;
            newArr[1] = isIncrement ? prev[1] + 3 : prev[1] - 3;
            return newArr;
        });
    };
    return (
        <div className="text-neutral-800">
            {books.map((item, index) => {
                if (index >= indexBound[0] && index <= indexBound[1]) {
                    return <div className={`${item.name}`}>{item.name}</div>;
                } else {
                    return <></>;
                }
            })}
            <div className="h-48 w-48 bg-yellow-200">Folder</div>
            <button
                className="w-12 h-12 bg-white rounded-full"
                onClick={() => changePage(true)}
            >
                +
            </button>
            <button
                className="w-12 h-12 bg-white rounded-full"
                onClick={() => changePage(false)}
            >
                -
            </button>
        </div>
    );
};

export default FolderEffect;
