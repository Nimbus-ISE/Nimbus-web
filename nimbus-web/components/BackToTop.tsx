import { useMediaQuery } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import useScrollPercentage from "@/hooks/useScrollPercentage";
import React from "react";

const BackToTop = () => {
    const percent = useScrollPercentage({ rootId: "root" });
    const scrollTo = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <button
            onClick={scrollTo}
            className={`fixed bottom-5 right-5 w-14 h-14 ${
                percent > 10 ? "translate-y-0" : "translate-y-24"
            } transition duration-500 text-xs shadow-md
             bg-black bg-opacity-50 backdrop-blur-md rounded-lg z-50`}
        >
            <KeyboardArrowUpRoundedIcon />
            <div>TOP</div>
        </button>
    );
};

export default BackToTop;
