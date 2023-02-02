import React from "react";
import Form from "@/components/Forms/Form";
import PageIndicator from "@/components/PageIndicator/PageIndicator";

const formArr: Array<IForm> = [
    { type: "Location", title: "Where would you like to go?" },
    { type: "Dates", title: "Select the dates" },
    { type: "Style", title: "What kind of trip?" },
    { type: "Budget", title: "What is your budget?" },
    { type: "Tags", title: "Select some tags" },
];

const Plan = () => {
    return (
        <div className="flex">
            <PageIndicator formArr={formArr} />
            <div
                id="form-container"
                className="overflow-y-scroll rounded-xl h-[20rem] w-fit mx-auto"
            >
                <Form formArr={formArr} />
            </div>
        </div>
    );
};

export default Plan;
