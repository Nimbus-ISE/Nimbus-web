import React from "react";
import Form from "@/components/Forms/Form";
import PageIndicator from "@/components/PageIndicator/PageIndicator";
import useScrollPercentage from "@/hooks/useScrollPercentage";

const list = [
    { name: "Location" },
    { name: "Dates" },
    { name: "Style" },
    { name: "Budget" },
    { name: "Tags" },
];

const Plan = () => {
    return (
        <div className="flex">
            <PageIndicator list={list} />
            <div
                id="form-container"
                className="overflow-y-scroll rounded-xl h-[20rem] w-fit mx-auto"
            >
                {list.map((item) => {
                    return (
                        <div id="input-container">
                            <Form />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Plan;
