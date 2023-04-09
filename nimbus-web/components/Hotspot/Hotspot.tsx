import React from "react";
import HotspotCard from "./HotspotCard";
import useMediaQuery from "@/hooks/useMediaQuery";
import useObserver from "@/hooks/useObserver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface IProps {
    props: Array<any>;
}

const Hotspot = ({ props }: IProps) => {
    const [places] = React.useState<Array<any>>(Object.values(props));
    const [expand, setExpand] = React.useState<Array<boolean>>(
        Object.keys(props).map((index) => false)
    );
    const [current, setCurrent] = React.useState<number>(0);
    const [add, setAdd] = React.useState<number>(0);
    const [isCooldown, setIsCoolDown] = React.useState<boolean>(false);
    const [transition, setTransition] = React.useState<boolean>(false);
    const [z, setZ] = React.useState<Array<string>>(
        Object.keys(props).map((index) => "-" + index)
    );
    const isLargerThanMedium = useMediaQuery("(min-width: 768px)");
    const hotspotLeftIsIntersecting = useObserver({
        elementId: "hotspot-left",
    });
    const hotspotRightIsIntersecting = useObserver({
        elementId: "hotspot-right",
        delay: 200,
    });
    const calculateZIndexes = () => {
        setZ((prev: any) => {
            let newArr = [...prev];
            newArr.unshift(newArr[newArr.length - 1]);
            newArr = newArr.slice(0, newArr.length - 1);
            return newArr;
        });
    };
    const toggleCard = (index: number) => {
        setExpand((prev) => {
            const newArr = [...prev];
            newArr[index] = !newArr[index];
            return newArr;
        });
    };
    React.useEffect(() => {
        if (current !== 0 && !expand[current] && isLargerThanMedium) {
            setTimeout(() => toggleCard(current), 200);
        }
    }, [current]);
    React.useEffect(() => {
        if (isCooldown) setTimeout(() => setIsCoolDown(false), 1000);
    }, [isCooldown]);
    return (
        <div
            id="hotspot"
            className="relative flex text-black h-full w-screen bg-[#eae3cf] py-10"
        >
            <div className="flex flex-col md:flex-row m-auto z-30 justify-center p-1 w-full overflow-hidden">
                <div
                    id="hotspot-left"
                    className={`${
                        hotspotLeftIsIntersecting
                            ? "opacity-100"
                            : "translate-y-[300px] opacity-0"
                    } flex transition duration-1000 w-full max-w-[20rem] h-fit md:h-[25rem] md:bg-white
                    text-center md:shadow-md m-auto md:m-1 rounded-xl`}
                >
                    <div className="m-auto">
                        <h1 className="text-4xl md:text-5xl font-extrabold p-5">
                            ICONIC PLACES
                        </h1>
                        <p className="text-xs md:text-sm px-5 pb-5 md:pb-0">
                            The "Iconic Places" category in our trip planner
                            showcases the country's most enchanting landmarks
                            and natural wonders. These gems offer a glimpse into
                            Thailand's rich history, vibrant culture, and
                            stunning landscapes. From ancient temples to
                            pristine beaches, this curated selection ensures a
                            memorable experience, capturing the unique spirit of
                            this captivating destination.
                        </p>
                    </div>
                </div>
                <div
                    id="hotspot-right"
                    className={`${
                        hotspotRightIsIntersecting
                            ? "opacity-100"
                            : "translate-y-[20rem] opacity-0"
                    } transition duration-1000 relative w-full max-w-[20rem] h-[25rem] m-auto mt-2 md:m-1`}
                >
                    {places.map((obj: any, index: number) => {
                        return (
                            <HotspotCard
                                obj={obj}
                                places={places}
                                index={index}
                                expand={expand}
                                current={current}
                                add={add}
                                z={z}
                                transition={transition}
                                toggleCard={toggleCard}
                            />
                        );
                    })}
                    <div
                        onMouseEnter={() => setAdd(10)}
                        onMouseLeave={() => setAdd(0)}
                        onClick={() => {
                            if (!isCooldown) {
                                if (expand[current]) toggleCard(current);
                                setTransition(true);
                                setTimeout(() => {
                                    calculateZIndexes();
                                    setCurrent((prev) => {
                                        if (prev + 1 === expand.length)
                                            return 0;
                                        return prev + 1;
                                    });
                                    setTransition(false);
                                }, 500);
                                setIsCoolDown(true);
                            }
                        }}
                        className="absolute flex left-[18rem] w-20 h-full z-40 
                        duration-500 cursor-pointer hover:scale-125"
                    >
                        <div
                            className="transition duration-500 flex m-auto 
                           scale-x-[150%] scale-y-[300%] rounded-full opacity-30"
                        >
                            <FontAwesomeIcon
                                icon={faPlay}
                                color="black"
                                className="m-auto aspect-square drop-shadow-sm fa-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotspot;
