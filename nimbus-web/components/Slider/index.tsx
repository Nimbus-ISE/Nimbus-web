import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import useElementSize from "@/hooks/useElementSize";

interface ProfileCardProps {
    id: number;
    title: string;
    image: string;
    name: string;
    shape: "rectangle" | "circle";
    onClick: (id: number) => void;
}

const ProfileCard = ({
    id,
    title,
    image,
    name,
    shape,
    onClick,
}: ProfileCardProps) => {
    const [style, setStyle] = React.useState<Array<string>>([]);
    const isLargerThanMedium = useMediaQuery("(min-width: 786px)");
    const { height } = useElementSize(title);
    React.useEffect(() => {
        if (shape) {
            const containerStyle =
                shape === "circle" && isLargerThanMedium
                    ? "w-32 h-32"
                    : shape === "circle" && !isLargerThanMedium
                    ? "w-20 h-20"
                    : shape === "rectangle" && isLargerThanMedium
                    ? "w-60 h-[8.44rem]"
                    : "w-32 h-[4.5rem]";
            setStyle((prev) => {
                const newArr = [...prev];
                newArr[0] = containerStyle;
                return newArr;
            });
        }
    }, [shape, isLargerThanMedium]);
    return (
        <div
            id={title}
            className={`relative mx-2 ${style[0]} aspect-video rounded-xl`}
        >
            <button
                onClick={() => onClick(id)}
                className={`overflow-hidden ${
                    shape === "circle" ? "rounded-full" : "rounded-xl"
                } w-full h-full shadow-md`}
            >
                <Image
                    className="w-full h-full hover:scale-105 object-cover
					transform-gpu duration-700 object-center aspect-video"
                    src={image}
                    draggable={false}
                    width={160}
                    height={90}
                    alt={name}
                />
            </button>
            <div
                style={{
                    top: height + 5,
                }}
                className={`absolute w-full text-xs md:text-sm px-2 text-neutral-700 text-center`}
            >
                {name}
            </div>
        </div>
    );
};

export default ProfileCard;
