import { useEffect, useState } from "react";
import classes from "./FolderSmall.module.css";
import PlanGraph from "./PlanGraph";
import numberToWords from "@/utils/numberTranslator";
import capitalizeFirst from "@/utils/capitalizeFirst";
import { testData } from "@/test_data/testData";
import usePlanTab from "@/hooks/usePlanTab";
const FolderSmall = (props: any) => {
    const { currentView, incrementView, decrementView } = usePlanTab();
    const [opendedTab, setOpenedTab] = useState("");
    const [openFullTab, setOpenFullTab] = useState(false);

    const toggleTabs = (tab: string) => {
        setOpenedTab(tab);
    };

    useEffect(() => {
        setOpenedTab(`tab${currentView}`);
        console.log("fulltab");
    }, [openFullTab, currentView]);

    return (
        <>
            <>
                <div className={classes.tabs}>
                    {testData.map((day, index) => {
                        if (index >= currentView && index < currentView + 3)
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
                                                toggleOpenReview={
                                                    props.toggleOpenReview
                                                }
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
            </>
        </>
    );
};
export default FolderSmall;
