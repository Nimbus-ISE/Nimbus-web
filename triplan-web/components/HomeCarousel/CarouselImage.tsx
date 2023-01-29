import React from "react";
import Filter from "./Filter";

interface IProps {
    src: string;
    filter: string;
    style?: any;
}

const CarouselImage = ({ src, filter }: IProps) => {
    return (
        <div>
            <Filter color={filter} />
            <div
                style={{
                    backgroundImage: `url(${src})`,
                }}
                className={`absolute top-0 bottom-0 left-0 right-0 ${src} 
                bg-center bg-cover brightness-150`}
            />
        </div>
    );
};

export default CarouselImage;
