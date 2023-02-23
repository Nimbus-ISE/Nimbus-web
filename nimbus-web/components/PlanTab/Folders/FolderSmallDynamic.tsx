import { useEffect, useState } from "react";
import classes from "./FolderSmall.module.css";
import PlanGraph from "./PlanGraph";
import numberToWords from "@/utils/numberTranslator";
import capitalizeFirst from "@/utils/capitalizeFirst";
import { testData } from "@/test_data/testData";
import usePlanTab from "@/hooks/usePlanTab";

import { getPlanTabState } from "../PlanTabContext";

const FolderSmall = () => {
    const { currentView, incrementView, decrementView } = usePlanTab();
    const [opendedTab, setOpenedTab] = useState("");
    const [tabsClass, setTabsClass] = useState(classes.tabs);
    const { openFullTab, isBigScreen }: any = getPlanTabState();
    const displayNum = 3;

    const toggleTabs = (tab: string) => {
        setOpenedTab(tab);
    };

    useEffect(() => {
        setOpenedTab(`tab${currentView}`);
        console.log("fulltab");
        if (isBigScreen && !openFullTab) {
            setTabsClass(classes.tabs);
        } else if (!isBigScreen && openFullTab) {
            setTabsClass(classes.mobileTabs);
        } else if (!isBigScreen && openFullTab) {
            setTabsClass(classes.fullMobileTabs);
        } else {
            setTabsClass(classes.tabs);
        }
    }, [openFullTab, currentView]);

    return (
        <div className="-translate-y-4">
            <div
                className={
                    tabsClass === classes.fullMobileTabs ? classes.slideIn : ""
                }
            >
                <div className={tabsClass}>
                    {testData.map((day, index) => {
                        if (
                            index >= currentView &&
                            index < currentView + displayNum
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
                                onMouseDown={decrementView}
                            >
                                {"<<"}
                            </label>
                            <input type="radio" name="tabs" id={`arrow`} />
                            <label
                                htmlFor={`arrow`}
                                className={classes.arrowLabel}
                                onMouseDown={incrementView}
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
