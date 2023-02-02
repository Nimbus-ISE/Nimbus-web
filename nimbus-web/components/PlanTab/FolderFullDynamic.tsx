import { ReactElement } from "react";
import classes from "./FolderFull.module.css";
import PlanGraph from "./PlanGraph";
import numberToWords from "@/utils/numberTranslator";
import capitalizeFirst from "@/utils/capitalizeFirst";
interface IProps {
    expand: boolean;
    children?: ReactElement;
    onClose?: any;
}
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
const FolderFull = (props: IProps) => {
    return (
        <>
            <>
                <div className={classes.tabs}>
                    <label htmlFor="tabone" className={classes.checkedLabel}>
                        Day One
                    </label>
                    <div className={classes.tab}>
                        <div
                            className={
                                "flex w-full gap-20 animate-graph-expand"
                            }
                        >
                            {testData.map((data, index) => {
                                if (index < 3) {
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
                                onClick={props.onClose}
                            >
                                {"X"}
                            </button>
                        </div>
                    </div>

                    {testData.map((data, index) => {
                        if (index != 0 && index < 3) {
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
