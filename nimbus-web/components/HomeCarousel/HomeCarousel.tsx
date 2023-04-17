import useElementSize from "@/hooks/useElementSize";
import useMediaQuery from "@/hooks/useMediaQuery";
import useObserver from "@/hooks/useObserver";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Button.module.css";
import CarouselImage from "./CarouselImage";
import Filter from "./Filter";

const carouselList = [
    {
        src: "/images/home.webp",
        filter: "bg-yellow-500",
    },
    {
        src: "/images/home1.webp",
        filter: "bg-emerald-500",
    },
    {
        src: "/images/home2.webp",
        filter: "bg-pink-500",
    },
    {
        src: "/images/home3.webp",
        filter: "bg-yellow-500",
    },
    {
        src: "/images/home4.webp",
        filter: "bg-emerald-500",
    },
    {
        src: "/images/home.webp",
        filter: "bg-yellow-500",
    },
];

const HomeCarousel = () => {
    const paragraphSize = useElementSize("carousel-paragraph");
    const carouselSize = useElementSize("carousel");
    const isLargerThanMedium = useMediaQuery("(min-width: 768px)");
    const carouselTitleIsIntersecting = useObserver({
        elementId: "carousel-text-container",
    });
    const [current, setCurrent] = React.useState<number>(0);
    const [disableTransition, setDisableTransition] =
        React.useState<boolean>(true);
    const router = useRouter();
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
            className="relative flex flex-col md:flex-row text-black h-[40rem] py-5 overflow-hidden"
        >
            {carouselList.map((carouselObj, index) => {
                return (
                    <CarouselImage
                        disableTransition={disableTransition}
                        translate={carouselSize.width * (index - current)}
                        src={carouselObj.src}
                        filter={carouselObj.filter}
                    />
                );
            })}
            <div
                id="carousel-text-container"
                style={{
                    paddingTop: isLargerThanMedium ? undefined : 100,
                    paddingBottom: paragraphSize.height,
                }}
                className={`${
                    carouselTitleIsIntersecting
                        ? "opacity-100"
                        : "translate-y-[300px] opacity-0"
                } relative m-auto text-center z-10 transition duration-1000`}
            >
                <div
                    className={`text-4xl sm:text-5xl md:text-6xl
                    lg:text-7xl font-extrabold text-white drop-shadow-lg w-fit`}
                >
                    <h1 className="mb-2">LET US DESIGN</h1>
                    <h1 className="text-tricolorgreen">YOUR HOLIDAY</h1>
                </div>
                <p
                    id="carousel-paragraph"
                    className={`absolute text-white text-justify text-xs md:text-sm drop-shadow-sm p-3`}
                >
                    Introducing our web app that creates customized travel plans
                    for Thailand. Input your preferences, like duration,
                    interests, and budget, and our algorithm designs a unique
                    itinerary. Our extensive database includes diverse
                    attractions, accommodations, and activities for a
                    well-rounded experience in the Land of Smiles.
                </p>
            </div>
            <div
                style={{
                    marginTop: isLargerThanMedium ? undefined : 30,
                    marginBottom: paragraphSize.height,
                }}
                className="m-auto z-[11]"
            >
                <button
                    onClick={() => router.push("/plan")}
                    className={styles.button}
                >
                    <div className="font-bold text-xl">PLAN NOW</div>
                </button>
            </div>
            <Filter
                color=""
                className={{
                    background: isLargerThanMedium
                        ? "rgba(0,0,0,0)"
                        : "linear-gradient(0deg, rgba(245,245,245,1) 0%, rgba(245,245,245,1) 0%, rgba(245,245,245,0) 30%)",
                }}
            />
        </div>
    );
};

export default HomeCarousel;
