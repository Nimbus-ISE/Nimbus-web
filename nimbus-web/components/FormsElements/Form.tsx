import useElementSize from "@/hooks/useElementSize";
import React, { ReactElement } from "react";
import BudgetInput from "./BudgetInput";
import DateForm from "./DateInput";
import DistanceInput from "./DistanceInput";
import LocationInput from "./LocationInput";
import TagsSelection from "./TagsSelection";
import TripTypeInput from "./TripTypeInput";
import { ScrollContext } from "../Plan";

interface IProps {
    formArr: Array<IForm>;
}

const formMapper: { [key: string]: ReactElement<any, any> } = {
    Location: <LocationInput />,
    Dates: <DateForm />,
    Style: <TripTypeInput />,
    Budget: <BudgetInput />,
    Distance: <DistanceInput />,
    Tags: <TagsSelection />,
};

const Form = ({ formArr }: IProps) => {
    const { setCurrentValue } = React.useContext(ScrollContext);
    const { height } = useElementSize("plan-card");
    const handleOnClick = (index: number, isForward: boolean) => {
        if (isForward) setCurrentValue(index + 1);
        else setCurrentValue(index - 1);
    };
    return (
        <form>
            {formArr.map((item, index) => {
                return (
                    <div
                        style={{ height: height }}
                        id="input-container"
                        className="flex flex-col h-full w-full bg-blue-100"
                    >
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleOnClick(index, false);
                            }}
                            className="bg-red-200 p-3 w-full flex-1"
                        >
                            Go up
                        </button>
                        <div className="text-center text-4xl font-extrabold px-0 py-5">
                            {item.title}
                        </div>
                        <div className="my-7 text-xs flex justify-center">
                            {formMapper[item.type]}
                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleOnClick(index, true);
                            }}
                            className="bg-red-200 p-3 w-full flex-1"
                        >
                            Go down
                        </button>
                    </div>
                );
            })}
        </form>
    );
};

export default Form;
