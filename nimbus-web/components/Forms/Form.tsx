import useElementSize from "@/hooks/useElementSize";
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
