import React from "react";
import classes from "./ClosingFullFolder.module.css";

import PlanGraph from "./PlanGraph";
import numberToWords from "@/utils/numberTranslator";
import capitalizeFirst from "@/utils/capitalizeFirst";

import { getPlanTabState } from "../PlanTabContext";
const ClosingFullFolder = () => {
    const { currentFolderView, fullPlan, travelTime } = getPlanTabState();

    return (
        <>
            <>
                <div className={classes.tabs}>
                    <label htmlFor="tabone" className={classes.checkedLabel}>
                        Day{" "}
                        {capitalizeFirst(numberToWords(currentFolderView + 1))}
                    </label>
                    <div className={classes.tab}>
                        <div
                            className={
                                "flex w-full gap-20 animate-graph-expand"
                            }
                        >
                            {fullPlan.map((data: any, index: any) => {
                                if (
                                    index >= currentFolderView &&
                                    index < currentFolderView + 1
                                ) {
                                    return (
                                        <div className="h-[40rem] overflow-y-scroll overflow-x-hidden scrollbar-hide p-2 ">
                                            <PlanGraph
                                                clickable={false}
                                                dayNumber={index + 1}
                                                places={[...data]}
                                                travelTimes={[
                                                    ...travelTime[index],
                                                ]}
                                            />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>

                    {fullPlan.map((data: any, index: any) => {
                        if (
                            index > currentFolderView &&
                            index < currentFolderView + 3
                        ) {
                            return (
                                <label
                                    htmlFor={`tab${index + 1}`}
                                    className={classes.checkedLabel}
                                >
                                    Day
                                    {capitalizeFirst(numberToWords(index + 1))}
                                </label>
                            );
                        } else {
                            return <></>;
                        }
                    })}
                </div>

                {/* <img
                    src="/images/map_placeholder.webp"
                    className=" absolute z-[-100] right-0 top-0 h-[110vh] w-[66.6666666667vw]"
                /> */}
            </>
        </>
    );
};

export default ClosingFullFolder;
