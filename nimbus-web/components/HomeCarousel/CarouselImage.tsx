import React from "react";
import Filter from "./Filter";

interface IProps {
    src: string;
    filter: string;
    translate: number;
    disableTransition: boolean;
}

const CarouselImage = ({
    src,
    filter,
    translate,
    disableTransition,
}: IProps) => {
    const [] = React.useState<number>();
    return (
        <div
            style={{
                transform: `translate(${translate}px)`,
            }}
            className={`${
                disableTransition ? "" : "transition duration-500 ease-in-out"
            } absolute top-0 left-0 bottom-0 right-0`}
        >
            <div className="relative w-full h-full">
                <Filter color={filter} />
                <div
                    style={{
                        backgroundImage: `url(${src})`,
                    }}
                    className={`absolute top-0 bottom-0 left-0 right-0 ${src} 
                bg-center bg-cover`}
                />
            </div>
        </div>
    );
};

export default CarouselImage;
