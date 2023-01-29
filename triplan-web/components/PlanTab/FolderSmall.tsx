import { useEffect, useState } from "react";
import classes from "./FolderSmall.module.css";

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
                        Tab One
                    </label>
                    {opendedTab === "tabone" && (
                        <div className={classes.tab}>
                            <h1>Tab One Content</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
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
                        Tab Two
                    </label>
                    {opendedTab === "tabtwo" && (
                        <div className={classes.tab}>
                            <h1>Tab Two Content</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
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
                        Tab Three
                    </label>
                    {opendedTab === "tabthree" && (
                        <div className={classes.tab}>
                            <h1>Tab Three Content</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    )}
                </div>
            </>
        </>
    );
};
export default FolderSmall;
