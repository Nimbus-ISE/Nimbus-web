import useElementSize from "@/hooks/useElementSize";
import React, { ReactElement } from "react";
import DateForm from "./DateInput";
import LocationInput from "./LocationInput";

interface IProps {
    formArr: Array<IForm>;
}

const formMapper: { [key: string]: ReactElement<any, any> } = {
    Location: <LocationInput />,
    Dates: <DateForm />,
    Style: <LocationInput />,
    Budget: <LocationInput />,
    Tags: <LocationInput />,
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
