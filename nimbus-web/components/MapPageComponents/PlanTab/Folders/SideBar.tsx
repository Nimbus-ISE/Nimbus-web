import React, { useEffect } from "react";

import FolderSmallDynamic from "./FolderSmallDynamic";

import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";

const SideBar = () => {
    const dispatch: any = getPlanTabDispatch();
    const { openFullTab, isBigScreen, openSavePlan } = getPlanTabState();

    return (
        <div className={" h-full z-10 lg:col-span-4"}>
            <FolderSmallDynamic />
            {isBigScreen && (
                <>
                    <button
                        className="hover:bg-gray-100 w-9 h-9 pr-0.5 absolute rounded-full duration-300 top-[9vh] left-[28.5vw] text-white flex justify-center items-center"
                        onClick={() => {
                            dispatch({ type: "TOGGLE_SAVE_PLAN" });
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            id="IconChangeColor"
                            height="20"
                            width="20"
                            className="ml-[2.75px]"
                        >
                            <path
                                fill="rgb(212 212 212)"
                                d="M433.1 129.1l-83.9-83.9C342.3 38.32 327.1 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 152.9 441.7 137.7 433.1 129.1zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S259.3 416 224 416zM320 208C320 216.8 312.8 224 304 224h-224C71.16 224 64 216.8 64 208v-96C64 103.2 71.16 96 80 96h224C312.8 96 320 103.2 320 112V208z"
                                id="mainIconPathAttribute"
                            ></path>
                        </svg>
                    </button>

                    <button
                        className="absolute bg-white top-[36vh]   p-2 h-28 rounded-r-xl z-10 left-[33%]"
                        onClick={() => {
                            dispatch({ type: "OPEN_FULL_FOLDER" });
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="10"
                            height="100"
                            className="rotate-180"
                        >
                            <polygon points="0,50 100,0 100,100" />
                        </svg>
                    </button>
                </>
            )}
            {!isBigScreen && !openFullTab && (
                <>
                    <button
                        className="absolute bg-black top-[72vh] left-[88vw] z-10 w-10 h-10 text-white text-center font-extrabold text-2xl rounded cursor-pointer"
                        onClick={() => {
                            dispatch({ type: "TOGGLE_SAVE_PLAN" });
                        }}
                    >
                        {!openSavePlan && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                id="IconChangeColor"
                                height="35"
                                width="35"
                                className="ml-[2.5px]"
                            >
                                <path
                                    fill="#FFFFFF"
                                    d="M433.1 129.1l-83.9-83.9C342.3 38.32 327.1 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 152.9 441.7 137.7 433.1 129.1zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S259.3 416 224 416zM320 208C320 216.8 312.8 224 304 224h-224C71.16 224 64 216.8 64 208v-96C64 103.2 71.16 96 80 96h224C312.8 96 320 103.2 320 112V208z"
                                    id="mainIconPathAttribute"
                                ></path>
                            </svg>
                        )}
                        {openSavePlan && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
                            </svg>
                        )}
                    </button>
                    <button
                        className="absolute bg-black  top-[72vh] left-[76vw] z-10 w-10 h-10 text-white text-center font-extrabold text-2xl rounded cursor-pointer "
                        onClick={() => {
                            dispatch({ type: "OPEN_FULL_FOLDER" });
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="ml-[6px]"
                        >
                            {" "}
                            <path
                                fill-rule="evenodd"
                                d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
                            />{" "}
                        </svg>
                    </button>
                </>
            )}
            {!isBigScreen && openFullTab && (
                <button
                    className="absolute bg-white  p-2 z-10 top-[10%] left-[90%] font-extrabold text-2xl animate-slide-in"
                    onClick={() => {
                        dispatch({ type: "CLOSE_FULL_FOLDER" });
                    }}
                >
                    {"X"}
                </button>
            )}
        </div>
    );
};

export default SideBar;
