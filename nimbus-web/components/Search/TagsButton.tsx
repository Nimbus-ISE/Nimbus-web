import React from "react";
import { useRouter } from "next/router";

const TagsButton = () => {
    const router = useRouter();
    const handleOnClick = () => {
        router.push("/search");
    };
    return (
        <button
            onClick={handleOnClick}
            className="bg-neutral-100 h-8 my-auto md:border-[1px] duration-300 whitespace-nowrap
            shadow-md md:shadow-sm rounded-full px-3 py-1 text-sm hover:bg-neutral-200 transition"
        >
            +Tags
        </button>
    );
};

export default TagsButton;
