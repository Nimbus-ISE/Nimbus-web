import { ReactElement } from "react";
import classes from "./FolderFull.module.css";
import PlanGraph from "./PlanGraph";
interface IProps {
    expand: boolean;
    children?: ReactElement;
    onClose?: any;
}
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
                            <div className="h-[40rem] overflow-y-scroll overflow-x-hidden scrollbar-hide p-2 ">
                                <PlanGraph
                                    clickable={false}
                                    dayNumber={1}
                                    places={[
                                        {
                                            name: "To You",
                                            description: "I miss you.",
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
                            <div className="h-[40rem] overflow-y-scroll overflow-x-hidden  scrollbar-hide">
                                <PlanGraph
                                    clickable={false}
                                    dayNumber={2}
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
                            <div className="h-[40rem]overflow-y-scroll overflow-x-hidden  scrollbar-hide">
                                <PlanGraph
                                    clickable={false}
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
                            <button
                                className=" bg-white  p-2 h-28 rounded-l-xl z-10 border-4 right-0 border-green-500 mt-[20%] absolute "
                                onClick={props.onClose}
                            >
                                {"X"}
                            </button>
                        </div>
                    </div>

                    <label htmlFor="tabtwo" className={classes.checkedLabel}>
                        Day Two
                    </label>

                    <label htmlFor="tabthree" className={classes.checkedLabel}>
                        Day Three
                    </label>
                </div>
            </>
        </>
    );
};
export default FolderFull;
