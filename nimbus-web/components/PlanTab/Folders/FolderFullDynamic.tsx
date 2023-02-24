import { ReactElement } from "react";
import classes from "./FolderFull.module.css";
import PlanGraph from "./PlanGraph";
import numberToWords from "@/utils/numberTranslator";
import capitalizeFirst from "@/utils/capitalizeFirst";
import { testData } from "@/test_data/testData";
import { FolderFullProps } from "../PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";

const FolderFull = (props: FolderFullProps) => {
    const { currentFolderView }: any = getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
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
                            {testData.map((data, index) => {
                                if (
                                    index >= currentFolderView &&
                                    index < currentFolderView + 3
                                ) {
                                    return (
                                        <div className="h-[40rem] overflow-y-scroll overflow-x-hidden scrollbar-hide p-2 ">
                                            <PlanGraph
                                                clickable={false}
                                                dayNumber={index + 1}
                                                places={[...data]}
                                            />
                                        </div>
                                    );
                                }
                            })}

                            <button
                                className=" bg-white  p-2 h-28 rounded-l-xl z-10 border-4 absolute right-0 border-green-500 mt-[20%] "
                                onClick={() => {
                                    dispatch({ type: "CLOSE_FULL_FOLDER" });
                                }}
                            >
                                {"X"}
                            </button>
                        </div>
                    </div>

                    {testData.map((data, index) => {
                        if (
                            index > currentFolderView &&
                            index < currentFolderView + 3
                        ) {
                            return (
                                <label
                                    htmlFor={`tab${index + 1}`}
                                    className={classes.checkedLabel}
                                >
                                    Day{" "}
                                    {capitalizeFirst(numberToWords(index + 1))}
                                </label>
                            );
                        } else {
                            return <></>;
                        }
                    })}
                </div>
            </>
        </>
    );
};
export default FolderFull;
