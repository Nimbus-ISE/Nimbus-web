import React from "react";
import AlternativeItem from "./AlternativeItem";

const Alternative = () => {
    return (
        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2  overflow-y-scroll scrollbar-hide  animate-fade-in ">
            <div className="rounded-xl bg-white h-[30rem] w-[46rem] p-2">
                <div className="flex flex-col">
                    <div className="text-2xl text-center font-extrabold text-[#a6a6a6]">
                        Alternatives
                    </div>
                    <div className="flex gap-10 place-items-center">
                        <AlternativeItem
                            title="title"
                            description="lorem ipsum"
                        />
                        <AlternativeItem
                            title="title"
                            description="lorem ipsum"
                        />
                        <AlternativeItem
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
