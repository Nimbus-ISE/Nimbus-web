import React from "react";
import Form from "@/components/FormsElements/Form";
import PageIndicator from "@/components/PageIndicator/PageIndicator";
import useViewportHeight from "@/hooks/useViewportHeight";
import { useMediaQuery } from "@mui/material";
import Filter from "./HomeCarousel/Filter";

const formArr: Array<IForm> = [
    { type: "Location", title: "Where would you like to go?" },
    { type: "Dates", title: "Select the dates" },
    { type: "Style", title: "What kind of trip?" },
    { type: "Budget", title: "What is your budget?" },
    { type: "Tags", title: "Select some tags" },
];

const Plan = () => {
    const { height } = useViewportHeight();
    const isLargerThanMedium = useMediaQuery("(min-width: 768px)");
    return (
        <div
            style={{ height: height }}
            className="relative flex bg-[url('/images/bg.webp')] bg-center text-black"
        >
            <div
                className="absolute top-0 bottom-0 left-0 right-0 opacity-40
                bg-gradient-to-r from-tricolorgreen to-yellow-300 z-10"
            />
            <div
                style={{ height: height - (isLargerThanMedium ? 64 : 0) }}
                id="plan-card"
                className="grid grid-flow-col gap-24 my-auto rounded-xl shadow-lg bg-white 
                px-5 md:px-10 mx-auto max-w-[50rem] min-w-[280px] overflow-hidden z-10"
            >
                <div className="my-auto">
                    <PageIndicator formArr={formArr} />
                </div>
                <div id="form-container" className="overflow-y-scroll w-fit">
                    <Form formArr={formArr} />
                </div>
            </div>
        </div>
    );
};

export default Plan;
