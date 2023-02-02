import React from "react";
import DateForm from "./DateForm";
import LocationForm from "./LocationForm";

interface IProps {
    formArr: Array<{ title: string; type: string }>;
    formMapper: any;
}

const formMapper = {
    location: <LocationForm />,
    date: <DateForm />,
};

const formArr = [
    { title: "some title", type: "location" },
    { title: "some title", type: "date" },
];

const Form = ({ formArr, formMapper }: IProps) => {
    return (
        <>
            {formArr.map((item) => {
                return (
                    <>
                        <div className="flex-col text-black max-w-2xl min-h-96 rounded-xl justify-center overflow-hidden shadow-lg bg-white py-12 px-12">
                            {item.title}
                            {formMapper[item.type]}
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default Form;
