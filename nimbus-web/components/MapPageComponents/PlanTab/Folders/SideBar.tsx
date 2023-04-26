import React, { useEffect } from "react";

import FolderSmallDynamic from "./FolderSmallDynamic";

import { getPlanTabDispatch, getPlanTabState } from "../PlanTabContext";

import { useUser } from "@auth0/nextjs-auth0/client";
import { customClaims } from "@/misc";
import SaveIcon from "@mui/icons-material/Save";
import ChevronRightIconRounded from "@mui/icons-material/ChevronRightRounded";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CloseIcon from "@mui/icons-material/Close";
import useViewportHeight from "@/hooks/useViewportHeight";

const SideBar = () => {
    const dispatch: any = getPlanTabDispatch();
    const { openFullTab, isBigScreen, openSavePlan } = getPlanTabState();
    const { user, isLoading } = useUser();
    const { height } = useViewportHeight();

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

    const handleToggleSave = () => {
        if (!isLoading && user) {
            dispatch({
                type: "TOGGLE",
                payload: { property: "openSavePlan", value: openSavePlan },
            });
        } else {
            alert("To save your trip plan, please log in to your account.");
        }
    };

    const handleOpenFolder = () => {
        dispatch({
            type: "TOGGLE",
            payload: { property: "openFullTab", value: openFullTab },
        });
    };

    const handleCloseFolder = () => {
        dispatch({ type: "CLOSE_FULL_FOLDER" });
    };

    return (
        <div
            style={{
                height: isBigScreen ? height : "100%",
            }}
            className={"z-10 lg:col-span-4 w-full"}
        >
            <div className="relative">
                <FolderSmallDynamic />
                {isBigScreen && (
                    <>
                        <button
                            className="hover:bg-gray-100 h-9 p-2 rounded-lg absolute duration-300 transition top-14 right-[24px] text-[#45D8D0] text-sm flex justify-center items-center border-[1px] border-[#45D8D0] bg-white backdrop-blur-sm bg-opacity-50"
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
                            className="trapezoid absolute flex justify-center items-center bg-white top-[36vh] p-2 h-28 w-6 rounded-r-lg right-[-20px] text-neutral-500"
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
                        className="hover:bg-gray-100 h-9 w-9 ml-3 rounded-lg duration-300 absolute top-16 right-10 text-[#45D8D0] text-sm flex justify-center items-center border-[1px] border-[#45D8D0] bg-white backdrop-blur-sm bg-opacity-50 animate-fade-in"
                        onClick={handleCloseFolder}
                    >
                        <CloseIcon sx={{ height: "20px" }} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SideBar;
