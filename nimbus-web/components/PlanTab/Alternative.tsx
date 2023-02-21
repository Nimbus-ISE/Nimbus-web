import React from "react";
import AlternativeItem from "./AlternativeItem";
import { AlternativeCardProps } from "./PlanTabTypes";

const Alternative = (props: AlternativeCardProps) => {
    return (
        <div
            className={
                props.isBigScreen
                    ? "absolute top-[50vh] left-1/3  -translate-x-1/2 -translate-y-1/2  overflow-y-scroll scrollbar-hide  animate-fade-in "
                    : " absolute  top-[40vh] left-1/2  -translate-x-1/2 -translate-y-1/2 overflow-y-scroll  scrollbar-hide  animate-fade-in"
            }
        >
            <div className="rounded-xl bg-white h-[60%] w-[60vw] p-2">
                <div className="flex flex-col place-items-center ">
                    <div className="text-2xl text-center font-extrabold text-[#a6a6a6]">
                        Alternatives
                    </div>
                    <div
                        className={
                            props.isBigScreen
                                ? "flex gap-[0.5rem] place-items-center "
                                : "flex flex-col gap-[5vw] place-items-center overflow-y-scroll h-[35vh] scrollbar-hide"
                        }
                    >
                        <AlternativeItem
                            isBigScreen={props.isBigScreen}
                            title="title"
                            description="lorem ipsum"
                        />
                        <AlternativeItem
                            isBigScreen={props.isBigScreen}
                            title="title"
                            description="lorem ipsum"
                        />
                        <AlternativeItem
                            isBigScreen={props.isBigScreen}
                            title="title"
                            description="lorem ipsum"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alternative;
