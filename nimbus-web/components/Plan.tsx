import React from "react";
import Form from "@/components/FormsElements/Form";
import PageIndicator from "@/components/PageIndicator/PageIndicator";
import useViewportHeight from "@/hooks/useViewportHeight";
import useMediaQuery from "@/hooks/useMediaQuery";
//import * as Scroll from "react-scroll";
import useElementSize from "@/hooks/useElementSize";
import ConfirmForm from "./FormsElements/ConfirmForm";
import Loading from "./Loading";
import Background from "./Background";
import { formArr } from "@/misc";

interface IScrollContext {
    currentValue: number;
    setCurrentValue: React.Dispatch<React.SetStateAction<number>>;
}

interface IPlanContext {
    isConfirmActive: boolean;
    setIsConfirmActive: React.Dispatch<React.SetStateAction<boolean>>;
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
    setFormDataField: (field: string, input: any) => void;
    planProgess: any;
    setPlanProgress: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const ScrollContext = React.createContext<IScrollContext>(
    {} as IScrollContext
);

export const PlanContext = React.createContext<IPlanContext>(
    {} as IPlanContext
);

const progress = Array(6).fill(false);
// progress[3] = true; // if we want the budgetinput to have a default of 0

const Plan = () => {
    const [formData, setFormData] = React.useState<any>({});
    const [isConfirmActive, setIsConfirmActive] =
        React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const setFormDataField = (field: string, payload: any) => {
        const newFormData = { ...formData };
        newFormData[field] = payload;
        setFormData(newFormData);
    };
    // below are related to page styling and scrolling stuff
    const [currentValue, setCurrentValue] = React.useState<number>(0);
    //const [snapUp, setSnapUp] = React.useState<boolean>(false);
    const { height } = useViewportHeight();
    const isLargerThanMedium = useMediaQuery("(min-width:768px)");
    const pageSize = useElementSize(isConfirmActive ? "" : "input-container");
    const [inputProgess, setInputProgess] = React.useState<boolean[]>(progress);
    // const setPlanProgress = (index: number, value: boolean) => {
    //     const temp = [...inputProgess];
    //     temp[index] = value;
    //     setInputProgess(temp);
    // };
    //const ref = React.useRef<any>();
    //const scrollTimerRef = React.useRef<any>();
    /*const handleOnClick = (index: number) => {
        const scroll = Scroll.animateScroll;
        scroll.scrollTo(index * pageSize.height, {
            duration: 500,
            smooth: true,
            containerId: "form-container",
        });
    };*/
    /*const scrollCallback = () => {
        //if current value is between nodes then snap to the direction
        if (!Number.isInteger(ref.current)) {
            handleOnClick(
                snapUp ? Math.floor(ref.current) : Math.ceil(ref.current)
            );
        }
    };*/
    React.useEffect(() => {
        const handleKeyDown = (e: any) => {
            if (e.code === "Enter" && !isConfirmActive) {
                setCurrentValue((prev) => {
                    if (prev + 1 < formArr.length) return prev + 1;
                    else return prev;
                });
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    React.useEffect(() => {
        //updates value and sets snap direction according to increment
        //setSnapUp(currentValue < ref.current ? true : false);
        //ref.current = currentValue;
        setCurrentValue(0);
        setTimeout(() => setIsLoading(false), 400);
        return () => setIsLoading(true);
    }, [isConfirmActive]);
    return (
        <ScrollContext.Provider
            value={{
                currentValue: currentValue,
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
                    planProgess: inputProgess,
                    setPlanProgress: setInputProgess,
                }}
            >
                <div
                    style={{ height: height }}
                    className="relative flex text-black overflow-hidden bg-neutral-100"
                >
                    {isLoading ? (
                        <div className="absolute z-50 top-0 bottom-0 left-0 right-0 m-auto flex bg-neutral-100">
                            <Loading />
                        </div>
                    ) : null}
                    <Background />
                    <div
                        id="plan-card"
                        style={{
                            //maxHeight: isLargerThanMedium ? "40rem" : "100%",
                            height:
                                height -
                                (isLargerThanMedium
                                    ? window.innerHeight * 0.1
                                    : 0),
                        }}
                        className="grid grid-flow-col md:rounded-xl shadow-lg bg-neutral-100 scrollbar-hide
                        m-auto max-w-[81rem] w-full md:w-[90%] min-w-[250px] overflow-hidden z-10"
                    >
                        {!isConfirmActive ? (
                            <div
                                className="pl-5 flex my-auto"
                                style={{
                                    /*maxHeight: isLargerThanMedium
                                        ? "40rem"
                                        : "100%",*/
                                    height:
                                        height -
                                        (isLargerThanMedium
                                            ? window.innerHeight * 0.1
                                            : 0),
                                }}
                            >
                                <div className="w-[4rem] md:w-[9rem] h-[90%] my-auto">
                                    <PageIndicator formArr={formArr} />
                                </div>
                                <div
                                    id="form-container"
                                    className="flex-1 transition duration-500"
                                    style={{
                                        transform: `translateY(-${
                                            currentValue * pageSize.height
                                        }px)`,
                                    }}
                                >
                                    <Form formArr={formArr} />
                                </div>
                            </div>
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
