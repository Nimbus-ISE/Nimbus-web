import React, { ReactElement } from "react";
import DateForm from "./DateForm";
import LocationForm from "./LocationForm";

interface IProps {
    formArr: Array<IForm>;
}

const formMapper: { [key: string]: ReactElement<any, any> } = {
    Location: <LocationForm />,
    Dates: <DateForm />,
    Style: <LocationForm />,
    Budget: <LocationForm />,
    Tags: <LocationForm />,
};

const Form = ({ formArr }: IProps) => {
    return (
        <form>
            {formArr.map((item) => {
                return (
                    <div
                        id="input-container"
                        className="flex-col text-black max-w-2xl min-h-96 rounded-xl justify-center overflow-hidden shadow-lg bg-white py-12 px-12"
                    >
                        <div className="text-center text-4xl font-extrabold px-0 py-5">
                            {item.title}
                        </div>
                        <div className="my-7 text-xs flex justify-center">
                            {formMapper[item.type]}
                        </div>
                    </div>
                );
            })}
        </form>
    );
};

export default Form;
