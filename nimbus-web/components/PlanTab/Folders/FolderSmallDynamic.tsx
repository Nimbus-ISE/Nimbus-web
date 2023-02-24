import { useEffect, useState } from "react";
import classes from "./FolderSmall.module.css";
import PlanGraph from "./PlanGraph";
import numberToWords from "@/utils/numberTranslator";
import capitalizeFirst from "@/utils/capitalizeFirst";
import { testData } from "@/test_data/testData";

import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";

const FolderSmall = () => {
    const [opendedTab, setOpenedTab] = useState("");
    const [tabsClass, setTabsClass] = useState(classes.tabs);
    const { openFullTab, isBigScreen, currentFolderView }: any =
        getPlanTabState();
    const dispatch: any = getPlanTabDispatch();
    const displayNum = 3;

    const toggleTabs = (tab: string) => {
        setOpenedTab(tab);
    };

    useEffect(() => {
        setOpenedTab(`tab${currentFolderView}`);
        console.log("fulltab");
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
        <div className="-translate-y-4 ">
            <div
                className={
                    tabsClass === classes.fullMobileTabs ? classes.slideIn : ""
                }
            >
                <div className={tabsClass}>
                    {testData.map((day, index) => {
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

                    {testData.length > 3 && (
                        <>
                            <input type="radio" name="tabs" id={`arrow`} />
                            <label
                                htmlFor={`arrow`}
                                className={classes.arrowLabel}
                                onMouseDown={() => {
                                    dispatch({ type: "DECREMENT_FOLDER" });
                                }}
                            >
                                {"<<"}
                            </label>
                            <input type="radio" name="tabs" id={`arrow`} />
                            <label
                                htmlFor={`arrow`}
                                className={classes.arrowLabel}
                                onMouseDown={() => {
                                    dispatch({ type: "INCREMENT_FOLDER" });
                                }}
                            >
                                {">>"}
                            </label>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default FolderSmall;
