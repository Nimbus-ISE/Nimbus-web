import classes from "./FolderFull.module.css";
import PlanGraph from "./PlanGraph";
import numberToWords from "@/utils/numberTranslator";
import capitalizeFirst from "@/utils/capitalizeFirst";

import { FolderFullProps } from "../PlanTabTypes";
import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const FolderFull = (props: FolderFullProps) => {
    const { currentFolderView, fullPlan, travelTime, arrivalAndLeaveTimes } =
        getPlanTabState();
    const dispatch: any = getPlanTabDispatch();

    return (
        <>
            <>
                <div className={classes.tabs}>
                    {/* <label htmlFor="tabone" className={classes.checkedLabel}>
                        <div className="text-sm font-normal">
                            Day{" "}
                            {capitalizeFirst(
                                numberToWords(currentFolderView + 1)
                            )}
                        </div>
                    </label> */}
                    <div className={classes.tab}>
                        <div
                            className={
                                "flex w-full  gap-20 animate-graph-expand"
                            }
                        >
                            {fullPlan.map((data: any, index: any) => {
                                if (
                                    index >= currentFolderView &&
                                    index < currentFolderView + 3
                                ) {
                                    return (
                                        <div className="h-[90vh] overflow-y-scroll overflow-x-hidden scrollbar-hide p-2 ">
                                            <PlanGraph
                                                clickable={false}
                                                dayNumber={index + 1}
                                                places={[...data.location_data]}
                                                travelTimes={[
                                                    ...travelTime[index],
                                                ]}
                                                arrivalAndLeaveTimes={[
                                                    ...arrivalAndLeaveTimes[
                                                        index
                                                    ],
                                                ]}
                                            />
                                        </div>
                                    );
                                }
                            })}

                            <button
                                className=" bg-black bg-opacity-40 text-white backdrop-blur-md p-2 h-28 rounded-l-xl z-10 absolute right-0 mt-[38vh] shadow-md"
                                onClick={() => {
                                    dispatch({
                                        type: "SET",
                                        payload: {
                                            property: "isClosingFullFolder",
                                            value: true,
                                        },
                                    });
                                    setTimeout(() => {
                                        dispatch({
                                            type: "MULTI_SET",
                                            payload: {
                                                property: [
                                                    "openFullTab",
                                                    "closed",
                                                    "openAlternatives",
                                                    "openReview",
                                                    "isClosingFullFolder",
                                                ],
                                                value: [
                                                    false,
                                                    true,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                            },
                                        });
                                    }, 1100);
                                }}
                            >
                                <ChevronLeftRoundedIcon />
                            </button>
                        </div>
                    </div>

                    {fullPlan.map((data: any, index: any) => {
                        if (
                            index > currentFolderView &&
                            index < currentFolderView + 3
                        ) {
                            return (
                                // <label
                                //     htmlFor={`tab${index + 1}`}
                                //     className={classes.checkedLabel}
                                // >
                                //     <div className="text-sm font-normal">
                                //         Day{" "}
                                //         {capitalizeFirst(
                                //             numberToWords(index + 1)
                                //         )}
                                //     </div>
                                // </label>
                                null
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
