import { useEffect, useState } from "react";
import classes from "./FolderSmall.module.css";
import PlanGraph from "./PlanGraph";

const FolderSmall = (props: any) => {
    const [opendedTab, setOpenedTab] = useState("");
    const [openFullTab, setOpenFullTab] = useState(false);

    const toggleTabs = (tab: string) => {
        setOpenedTab(tab);
    };

    useEffect(() => {
        setOpenedTab("tabone");
        console.log("fulltab");
    }, [openFullTab]);

    return (
        <>
            <>
                <div className={classes.tabs}>
                    <input
                        type="radio"
                        name="tabs"
                        id="tabone"
                        onChange={() => {
                            toggleTabs("tabone");
                        }}
                    />
                    <label
                        htmlFor="tabone"
                        className={
                            opendedTab === "tabone"
                                ? classes.checkedLabel
                                : classes.uncheckedLabel
                        }
                    >
                        Day One
                    </label>
                    {opendedTab === "tabone" && (
                        <div className={classes.tab}>
                            <h1>Tab One Content</h1>
                            <PlanGraph
                                clickable={true}
                                toggleOpenReview={props.toggleOpenReview}
                                dayNumber={1}
                                places={[
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
                                ]}
                            />
                        </div>
                    )}
                    <input
                        type="radio"
                        name="tabs"
                        id="tabtwo"
                        onChange={() => {
                            toggleTabs("tabtwo");
                        }}
                    />
                    <label
                        htmlFor="tabtwo"
                        className={
                            opendedTab === "tabtwo"
                                ? classes.checkedLabel
                                : classes.uncheckedLabel
                        }
                    >
                        Day Two
                    </label>
                    {opendedTab === "tabtwo" && (
                        <div className={classes.tab}>
                            <h1>Tab Two Content</h1>
                            <PlanGraph
                                clickable={true}
                                dayNumber={2}
                                places={[
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
                                ]}
                            />
                        </div>
                    )}
                    <input
                        type="radio"
                        name="tabs"
                        id="tabthree"
                        onChange={() => {
                            toggleTabs("tabthree");
                        }}
                    />
                    <label
                        htmlFor="tabthree"
                        className={
                            opendedTab === "tabthree"
                                ? classes.checkedLabel
                                : classes.uncheckedLabel
                        }
                    >
                        Day Three
                    </label>
                    {opendedTab === "tabthree" && (
                        <div className={classes.tab}>
                            <h1>Tab Three Content</h1>
                            <PlanGraph
                                clickable={true}
                                dayNumber={3}
                                places={[
                                    {
                                        name: "Wat Chana Songkhram Ratchaworamahawihan",
                                        description:
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum sed asperiores enim magni ipsum adipisci natus eveniet saepe cumque quam in assumenda non dolor eligendi hic ullam, illum volu",
                                        imgLink:
                                            "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                                    },
                                    {
                                        name: "Taobin",
                                        description:
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum sed asperiores enim magni ipsum adipisci natus eveniet saepe cumque quam in assumenda non dolor eligendi hic ullam, illum volu",
                                        imgLink:
                                            "https://images.unsplash.com/photo-1559912147-f62c767ec0e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpZmZ8ZW58MHx8MHx8&w=1000&q=80",
                                    },
                                ]}
                            />
                        </div>
                    )}
                </div>
            </>
        </>
    );
};
export default FolderSmall;
