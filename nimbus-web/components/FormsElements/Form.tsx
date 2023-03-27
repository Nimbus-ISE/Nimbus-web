import useElementSize from "@/hooks/useElementSize";
import React, { ReactElement } from "react";
import BudgetInput from "./BudgetInput";
import DateForm from "./DateInput";
import DistanceInput from "./DistanceInput";
import LocationInput from "./LocationInput";
import TagsSelection from "./TagsSelection";
import TripTypeInput from "./TripTypeInput";

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
    const { height } = useElementSize("plan-card");
    return (
        <form>
            {formArr.map((item) => {
                return (
                    <div
                        style={{ height: height }}
                        id="input-container"
                        className="flex px-2"
                    >
                        <div className="m-auto">
                            <div className="text-center text-4xl font-extrabold px-0 py-5">
                                {item.title}
                            </div>
                            <div className="my-7 text-xs flex justify-center">
                                {formMapper[item.type]}
                            </div>
                        </div>
                    </div>
                );
            })}
        </form>
    );
};

export default Form;
