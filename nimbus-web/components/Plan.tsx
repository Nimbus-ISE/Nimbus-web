import React from "react";
import Form from "@/components/FormsElements/Form";
import PageIndicator from "@/components/PageIndicator/PageIndicator";
import useViewportHeight from "@/hooks/useViewportHeight";
import { useMediaQuery } from "@mui/material";
import * as Scroll from "react-scroll";
import useElementSize from "@/hooks/useElementSize";
import ConfirmForm from "./FormsElements/ConfirmForm";

interface IScrollContext {
    setCurrentValue: React.Dispatch<React.SetStateAction<number>>;
}

interface IPlanContext {
    isConfirmActive: boolean;
    setIsConfirmActive: React.Dispatch<React.SetStateAction<boolean>>;
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
    setFormDataField: (field: string, input: any) => void;
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

export const PlanContext = React.createContext<IPlanContext>(
    {} as IPlanContext
);

const Plan = () => {
    const [formData, setFormData] = React.useState<any>({});
    const [isConfirmActive, setIsConfirmActive] =
        React.useState<boolean>(false);
    const setFormDataField = (field: string, payload: any) => {
        const newFormData = { ...formData };
        newFormData[field] = payload;
        setFormData(newFormData);
    };
    // below are related to page styling and scrolling stuff
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
            <PlanContext.Provider
                value={{
                    isConfirmActive: isConfirmActive,
                    setIsConfirmActive: setIsConfirmActive,
                    formData: formData,
                    setFormData: setFormData,
                    setFormDataField: setFormDataField,
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
                            maxHeight: isLargerThanMedium ? "40rem" : "100%",
                            height: height - (isLargerThanMedium ? 64 : 0),
                        }}
                        className="grid grid-flow-col gap-24 rounded-xl shadow-lg bg-neutral-100
                px-5 md:px-10 m-auto max-w-[60rem] md:w-[90%] min-w-[280px] overflow-hidden z-10"
                    >
                        {!isConfirmActive ? (
                            <>
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
                                    className="overflow-y-scroll hide-scrollbar w-fit scrollbar"
                                >
                                    <Form formArr={formArr} />
                                </div>
                            </>
                        ) : (
                            <ConfirmForm />
                        )}
                    </div>
                </div>
            </PlanContext.Provider>
        </ScrollContext.Provider>
    );
};

export default Plan;
