import useElementSize from "@/hooks/useElementSize";
import React from "react";
import styles from "./Button.module.css";
import CarouselImage from "./CarouselImage";

const carouselList = [
    {
        src: "/images/bg.webp",
        filter: "bg-emerald-500",
    },
    {
        src: "/images/ThorsWell.jpg",
        filter: "bg-sky-500",
    },
    {
        src: "/images/BlackHole.jpg",
        filter: "bg-orange-500",
    },
    {
        src: "/images/bg.webp",
        filter: "bg-emerald-500",
    },
];

const HomeCarousel = () => {
    const paragraphSize = useElementSize("carousel-paragraph");
    const carouselSize = useElementSize("carousel");
    const [current, setCurrent] = React.useState<number>(0);
    const [disableTransition, setDisableTransition] =
        React.useState<boolean>(false);
    React.useEffect(() => {
        const periodicSlide = setInterval(() => {
            setCurrent((prev: number) => {
                if (prev + 1 === carouselList.length) {
                    setDisableTransition(true);
                } else {
                    setDisableTransition(false);
                }
                return (prev + 1) % carouselList.length;
            });
        }, 5000);
        return () => clearInterval(periodicSlide);
    }, []);
    return (
        <div
            id="carousel"
            className="relative flex text-black h-[35rem] py-5 overflow-hidden"
        >
            {carouselList.map((carouselObj, index) => {
                return (
                    <CarouselImage
                        disableTransition={disableTransition}
                        translate={
                            carouselSize.width * index -
                            carouselSize.width * current
                        }
                        src={carouselObj.src}
                        filter={carouselObj.filter}
                    />
                );
            })}
            <div
                style={{
                    paddingBottom: paragraphSize.height,
                }}
                className="relative m-auto text-center z-10"
            >
                <div className="text-7xl font-extrabold text-white drop-shadow-lg w-fit">
                    <h1 className="mb-2">LET US DESIGN</h1>
                    <h1>YOUR HOLIDAY</h1>
                </div>
                <p
                    id="carousel-paragraph"
                    className="absolute text-white text-justify text-sm drop-shadow-sm p-3"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae eveniet, repellat consequuntur consequatur
                    aliquid rerum minus voluptas quibusdam magni delectus ipsum
                    laudantium dolore, illum fugiat dignissimos. Voluptatum illo
                    dolorum deleniti.
                </p>
            </div>
            <div
                style={{
                    marginBottom: paragraphSize.height,
                }}
                className="m-auto z-10"
            >
                <button className={styles.button}>
                    <div className="font-bold text-xl">PLAN NOW</div>
                </button>
            </div>
        </div>
    );
};

export default HomeCarousel;
