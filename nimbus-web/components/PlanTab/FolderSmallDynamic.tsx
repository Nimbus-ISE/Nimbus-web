import { useEffect, useState } from "react";
import classes from "./FolderSmall.module.css";
import PlanGraph from "./PlanGraph";
import numberToWords from "@/utils/numberTranslator";
import capitalizeFirst from "@/utils/capitalizeFirst";

const FolderSmall = (props: any) => {
    const [opendedTab, setOpenedTab] = useState("");
    const [openFullTab, setOpenFullTab] = useState(false);

    const toggleTabs = (tab: string) => {
        setOpenedTab(tab);
    };

    useEffect(() => {
        setOpenedTab("tab0");
        console.log("fulltab");
    }, [openFullTab]);

    const testData = [
        [
            {
                name: "John",
                description: "lorem",
                imgLink:
                    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            },
            {
                name: "Taobin",
                description: "Ipsum",
                imgLink:
                    "https://images.unsplash.com/photo-1559912147-f62c767ec0e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpZmZ8ZW58MHx8MHx8&w=1000&q=80",
            },
        ],
        [
            {
                name: "John",
                description: "lorem",
                imgLink:
                    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            },
            {
                name: "Taobin",
                description: "Ipsum",
                imgLink:
                    "https://images.unsplash.com/photo-1559912147-f62c767ec0e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpZmZ8ZW58MHx8MHx8&w=1000&q=80",
            },
        ],
        [
            {
                name: "John",
                description: "lorem",
                imgLink:
                    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            },
            {
                name: "Taobin",
                description: "Ipsum",
                imgLink:
                    "https://images.unsplash.com/photo-1559912147-f62c767ec0e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpZmZ8ZW58MHx8MHx8&w=1000&q=80",
            },
        ],
    ];

    return (
        <>
            <>
                <div className={classes.tabs}>
                    {testData.map((day, index) => {
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
                                    {capitalizeFirst(numberToWords(index + 1))}
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
                </div>
            </>
        </>
    );
};
export default FolderSmall;
