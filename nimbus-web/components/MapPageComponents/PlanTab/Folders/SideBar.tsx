import React, { useEffect } from "react";

import FolderSmallDynamic from "./FolderSmallDynamic";

import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";

import { useUser } from "@auth0/nextjs-auth0/client";
import { customClaims } from "@/misc";
import SaveIcon from "@mui/icons-material/Save";
import ChevronRightIconRounded from "@mui/icons-material/ChevronRightRounded";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CloseIcon from "@mui/icons-material/Close";

const SideBar = () => {
    const dispatch: any = getPlanTabDispatch();
    const { openFullTab, isBigScreen, openSavePlan } = getPlanTabState();
    const { user, isLoading } = useUser();

    // const isLoading = false;
    // const user = {
    //     ...customClaims,
    //     family_name: "P",
    //     given_name: "Nattakit",
    //     locale: "en",
    //     name: "Nattakit P",
    //     nickname: "search35453",
    //     picture:
    //         "https://lh3.googleusercontent.com/a/AEdFTp5a3gVM3PRFVmKChA74uW-FS210zmx4Lf7DAWwl4w=s96-c",
    //     updated_at: "2023-01-24T01:01:39.063Z",
    // };
    // // const user = undefined;

    const handleToggleSave = () => {
        if (!isLoading && user) {
            dispatch({ type: "TOGGLE_SAVE_PLAN" });
        } else {
            alert("To save your trip plan, please log in to your account.");
        }
    };

    const handleOpenFolder = () => {
        dispatch({ type: "OPEN_FULL_FOLDER" });
    };

    const handleCloseFolder = () => {
        dispatch({ type: "CLOSE_FULL_FOLDER" });
    };

    return (
        <div className={" h-full z-10 lg:col-span-4"}>
            <FolderSmallDynamic />
            {isBigScreen && (
                <>
                    <button
                        className="bg-black w-8 h-8 absolute rounded top-[9vh] left-[28.5vw] text-white"
                        onClick={() => {
                            dispatch({
                                type: "TOGGLE",
                                payload: { property: "openSavePlan" },
                            });
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            id="IconChangeColor"
                            height="27"
                            width="27"
                            className="ml-[2.75px]"
            <div className="relative">
                <FolderSmallDynamic />
                {isBigScreen && (
                    <>
                        <button
                            className="hover:bg-gray-100 h-9 p-2 rounded-lg absolute duration-300 transition top-16 right-10 text-[#45D8D0] text-sm flex justify-center items-center border-[1px] border-[#45D8D0] bg-white backdrop-blur-sm bg-opacity-50"
                            onClick={handleToggleSave}
                            disabled={isLoading || isLoading == undefined}
                        >
                            {!openSavePlan ? (
                                <>
                                    <SaveIcon sx={{ height: "20px" }} />
                                    <p>&nbsp;save</p>
                                </>
                            ) : (
                                <>
                                    <CloseIcon sx={{ height: "20px" }} />
                                    <p>&nbsp;cancel</p>
                                </>
                            )}
                        </button>

                    <button
                        className="absolute bg-white top-[36vh]   p-2 h-28 rounded-r-xl z-10 left-[33%]"
                        onClick={() => {
                            dispatch({
                                type: "MULTI_SET",
                                payload: {
                                    property: [
                                        "openFullTab",
                                        "closed",
                                        "openAlternatives",
                                        "openReview",
                                        "isClosingFullFolder",
                                    ],
                                    value: [true, false, false, false, false],
                                },
                            });
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
                            dispatch({
                                type: "TOGGLE",
                                payload: { property: "openSavePlan" },
                            });
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
                        <button
                            className="trapezoid absolute flex justify-center items-center bg-white top-[36vh] p-2 h-28 w-6 rounded-r-lg z-[99999] right-[-20px] text-neutral-500"
                            onClick={handleOpenFolder}
                        >
                            <ChevronRightIconRounded />
                        </button>
                    </>
                )}
                {!isBigScreen && !openFullTab && (
                    <>
                        <div className="flex absolute top-16 right-10 justify-end">
                            {/* <button
                                className="hover:bg-gray-100 h-9 w-9 mr-3 rounded-lg duration-300 text-[#45D8D0] text-sm flex justify-center items-center border-[1px] border-[#45D8D0] bg-white backdrop-blur-sm bg-opacity-50"
                                onClick={handleOpenFolder}
                            >
                                <ExpandLessIcon sx={{ height: "20px" }} />
                            </button> */}
                            <button
                                className="hover:bg-gray-100 h-9 p-2 rounded-lg duration-300 text-[#45D8D0] text-sm flex justify-center items-center border-[1px] border-[#45D8D0] bg-white backdrop-blur-sm bg-opacity-50"
                                onClick={handleToggleSave}
                                disabled={isLoading || isLoading == undefined}
                            >
                                {!openSavePlan ? (
                                    <>
                                        <SaveIcon sx={{ height: "20px" }} />
                                        <p>&nbsp;save</p>
                                    </>
                                ) : (
                                    <>
                                        <CloseIcon sx={{ height: "20px" }} />
                                        <p>&nbsp;cancel</p>
                                    </>
                                )}
                            </button>
                        </div>
                    </>
                )}
                {!isBigScreen && openFullTab && (
                    <button
                        className="absolute bg-black  top-[72vh] left-[76vw] z-10 w-10 h-10 text-white text-center font-extrabold text-2xl rounded cursor-pointer "
                        onClick={() => {
                            dispatch({
                                type: "MULTI_SET",
                                payload: {
                                    property: [
                                        "openFullTab",
                                        "closed",
                                        "openAlternatives",
                                        "openReview",
                                        "isClosingFullFolder",
                                    ],
                                    value: [true, false, false, false, false],
                                },
                            });
                        }}
                        className="hover:bg-gray-100 h-9 w-9 ml-3 rounded-lg duration-300 absolute top-16 right-10 text-[#45D8D0] text-sm flex justify-center items-center border-[1px] border-[#45D8D0] bg-white backdrop-blur-sm bg-opacity-50 animate-fade-in"
                        onClick={handleCloseFolder}
                    >
                        <CloseIcon sx={{ height: "20px" }} />
                    </button>
                </>
            )}
            {!isBigScreen && openFullTab && (
                <button
                    className="absolute bg-white  p-2 z-10 top-[10%] left-[90%] font-extrabold text-2xl animate-slide-in"
                    onClick={() => {
                        dispatch({
                            type: "MULTI_SET",
                            payload: {
                                property: [
                                    "openFullTab",
                                    "closed",
                                    "openAlternatives",
                                    "openReview",
                                    "isClosingFullFolder",
                                ],
                                value: [false, true, false, false, false],
                            },
                        });
                    }}
                >
                    {"X"}
                </button>
            )}
                )}
            </div>
        </div>
    );
};

export default SideBar;
