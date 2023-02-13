import React from "react";
import Form from "@/components/FormsElements/Form";
import PageIndicator from "@/components/PageIndicator/PageIndicator";
import useViewportHeight from "@/hooks/useViewportHeight";
import { useMediaQuery } from "@mui/material";
import * as Scroll from "react-scroll";
import useElementSize from "@/hooks/useElementSize";

interface IScrollContext {
    setCurrentValue: React.Dispatch<React.SetStateAction<number>>;
}

const formArr: Array<IForm> = [
    { type: "Location", title: "Where would you like to go?" },
    { type: "Dates", title: "Select the dates" },
    { type: "Style", title: "What kind of trip?" },
    { type: "Budget", title: "What is your budget?" },
    { type: "Distance", title: "Select traveling distance" },
    { type: "Tags", title: "Select some tags" },
];

export const ScrollContext = React.createContext<IScrollContext>(
    {} as IScrollContext
);

const Plan = () => {
    const [currentValue, setCurrentValue] = React.useState<number>(0);
    const [snapUp, setSnapUp] = React.useState<boolean>(false);
    const { height } = useViewportHeight();
    const isLargerThanMedium = useMediaQuery("(min-width:768px)");
    const pageSize = useElementSize("input-container");
    const ref = React.useRef<any>();
    const scrollTimerRef = React.useRef<any>();
    const handleOnClick = (index: number) => {
        const scroll = Scroll.animateScroll;
        scroll.scrollTo(index * pageSize.height, {
            duration: 500,
            smooth: true,
            containerId: "form-container",
        });
    };
    const scrollCallback = () => {
        //if current value is between nodes then snap to the direction
        if (!Number.isInteger(ref.current)) {
            handleOnClick(
                snapUp ? Math.floor(ref.current) : Math.ceil(ref.current)
            );
        }
    };
    React.useEffect(() => {
        //updates value and sets snap direction according to increment
        setSnapUp(currentValue < ref.current ? true : false);
        ref.current = currentValue;
    }, [currentValue]);
    return (
        <ScrollContext.Provider
            value={{
                setCurrentValue: setCurrentValue,
            }}
        >
            <div
                style={{ height: height }}
                className="relative flex bg-[url('/images/bg.webp')] bg-no-repeat bg-cover bg-center text-black"
            >
                <div
                    className="absolute top-0 bottom-0 left-0 right-0 opacity-40
                bg-gradient-to-r from-tricolorgreen to-yellow-300 z-10"
                />
                <div
                    id="plan-card"
                    style={{
                        height: height - (isLargerThanMedium ? 64 : 0),
                    }}
                    className="grid grid-flow-col gap-24 rounded-xl shadow-lg bg-white 
                px-5 md:px-10 m-auto max-w-[50rem] min-w-[280px] overflow-hidden z-10"
                >
                    <div className="my-auto">
                        <PageIndicator formArr={formArr} />
                    </div>
                    <div
                        onScroll={() => {
                            //activates when scroll has ended
                            clearTimeout(scrollTimerRef.current);
                            scrollTimerRef.current = setTimeout(
                                scrollCallback,
                                50
                            );
                        }}
                        id="form-container"
                        className="overflow-y-scroll w-fit"
                    >
                        <Form formArr={formArr} />
                    </div>
                </div>
            </div>
        </ScrollContext.Provider>
    );
};

export default Plan;
