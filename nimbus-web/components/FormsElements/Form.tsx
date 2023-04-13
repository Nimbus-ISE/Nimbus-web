import useElementSize from "@/hooks/useElementSize";
import React, { ReactElement } from "react";
import BudgetInput from "./BudgetInput";
import DateForm from "./DateInput";
import DistanceInput from "./DistanceInput";
import LocationInput from "./LocationInput";
import TagsSelection from "./TagsSelection";
import TripTypeInput from "./TripTypeInput";
import { ScrollContext } from "../Plan";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import useMediaQuery from "@/hooks/useMediaQuery";

interface IProps {
    formArr: Array<IForm>;
}

const formMapper: { [key: string]: ReactElement<any, any> } = {
    Location: <LocationInput />,
    Dates: <DateForm />,
    Style: <TripTypeInput />,
    Budget: <BudgetInput />,
    Transport: <DistanceInput />,
    Tags: <TagsSelection />,
};

const Form = ({ formArr }: IProps) => {
    const { currentValue, setCurrentValue } = React.useContext(ScrollContext);
    const { height } = useElementSize("plan-card");
    const isLargerThanMedium = useMediaQuery("(min-width: 768px)");
    const handleOnClick = (index: number, isForward: boolean) => {
        if (isForward) {
            setCurrentValue(index + 1);
        } else {
            setCurrentValue(index - 1);
        }
    };
    return (
        <form>
            {formArr.map((item, index) => {
                return (
                    <div
                        style={{ height: height }}
                        id="input-container"
                        className="flex flex-col overflow-y-scroll w-full text-neutral-700 mx-auto"
                    >
                        {index !== 0 ? (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleOnClick(index, false);
                                }}
                                className="flex p-3 w-full flex-1 group rounded-full"
                            >
                                <div className="bg-white h-11 w-11 p-2 flex rounded-full m-auto shadow-sm group-hover:-translate-y-3 transition duration-500">
                                    <ArrowUpward className="h-7 w-7 m-auto text-neutral-400 group-hover:text-tricolorgreen" />
                                </div>
                            </button>
                        ) : (
                            <div className="flex-1" />
                        )}
                        <div className="text-center text-2xl sm:text-3xl md:text-4xl text-neutral-700 font-extrabold px-0 py-5">
                            {item.title}
                        </div>
                        <div className="text-sm md:text-sm mx-auto max-w-[30rem] text-center">
                            {item.description}
                        </div>
                        <div className="my-7 text-xs flex justify-center w-full">
                            {formMapper[item.type]}
                        </div>

                        {index !== formArr.length - 1 ? (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleOnClick(index, true);
                                }}
                                className="flex p-3 w-full flex-1 group rounded-full"
                            >
                                <div className="bg-white h-11 w-11 p-2 flex rounded-full m-auto shadow-sm group-hover:translate-y-3 transition duration-500">
                                    <ArrowDownward className="h-7 w-7 m-auto text-neutral-400  group-hover:text-tricolorgreen" />
                                </div>
                            </button>
                        ) : (
                            <div className="flex-1" />
                        )}
                    </div>
                );
            })}
        </form>
    );
};

export default Form;
