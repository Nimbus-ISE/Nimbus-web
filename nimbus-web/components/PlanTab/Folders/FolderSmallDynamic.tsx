import { useEffect, useState } from "react";
import classes from "./FolderSmall.module.css";
import PlanGraph from "./PlanGraph";
import numberToWords from "@/utils/numberTranslator";
import capitalizeFirst from "@/utils/capitalizeFirst";

import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";

const FolderSmall = () => {
    const [opendedTab, setOpenedTab] = useState("");
    const [tabsClass, setTabsClass] = useState(classes.tabs);
    const { openFullTab, isBigScreen, currentFolderView, fullPlan } =
        getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
    const displayNum = 3;

    const toggleTabs = (tab: string) => {
        setOpenedTab(tab);
    };

    useEffect(() => {
        setOpenedTab(`tab${currentFolderView}`);

        if (isBigScreen && !openFullTab) {
            setTabsClass(classes.tabs);
        } else if (!isBigScreen && !openFullTab) {
            setTabsClass(classes.mobileTabs);
        } else if (!isBigScreen && openFullTab) {
            setTabsClass(classes.fullMobileTabs);
        } else {
            setTabsClass(classes.tabs);
        }
    }, [openFullTab, currentFolderView]);

    return (
        <div className=" ">
            <div
                className={
                    tabsClass === classes.fullMobileTabs ? classes.slideIn : ""
                }
            >
                <div className={tabsClass}>
                    {fullPlan.map((day: any, index: any) => {
                        if (
                            index >= currentFolderView &&
                            index < currentFolderView + displayNum
                        )
                            return (
                                <>
                                    <input
                                        type="radio"
                                        name="tabs"
                                        id={`tab${index}`}
                                        onChange={() => {
                                            toggleTabs(`tab${index}`);
                                            dispatch({
                                                type: "SET_CURRENT_FOLDER",
                                                payload: index,
                                            });
                                        }}
                                    />
                                    <label
                                        htmlFor={`tab${index}`}
                                        className={
                                            opendedTab === `tab${index}`
                                                ? classes.checkedLabel
                                                : classes.uncheckedLabel
                                        }
                                    >
                                        Day{" "}
                                        {capitalizeFirst(
                                            numberToWords(index + 1)
                                        )}
                                    </label>
                                    {opendedTab === `tab${index}` && (
                                        <div className={classes.tab}>
                                            <PlanGraph
                                                clickable={true}
                                                dayNumber={index + 1}
                                                places={[...day]}
                                            />
                                        </div>
                                    )}
                                </>
                            );
                    })}

                    {fullPlan.length > 3 && (
                        <>
                            <input type="radio" name="tabs" id={`arrow`} />
                            <label
                                htmlFor={`arrow`}
                                className={classes.arrowLabel}
                                onMouseDown={() => {
                                    dispatch({ type: "DECREMENT_FOLDER" });
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    width="20"
                                    height="100"
                                >
                                    <polygon points="0,50 100,0 100,100" />
                                </svg>
                            </label>
                            <input type="radio" name="tabs" id={`arrow`} />
                            <label
                                htmlFor={`arrow`}
                                className={classes.arrowLabel}
                                onMouseDown={() => {
                                    dispatch({ type: "INCREMENT_FOLDER" });
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    width="20"
                                    height="100"
                                    className="rotate-180"
                                >
                                    <polygon points="0,50 100,0 100,100" />
                                </svg>
                            </label>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default FolderSmall;
