import Loading from "@/components/Loading";
import React from "react";

const register = () => {
    React.useLayoutEffect(() => {
        window.location.href = "https://forms.gle/bX5Jggdxi4gBfLn79";
    });
    return (
        <div className="relative flex flex-col min-h-screen h-full w-screen overflow-x-hidden bg-neutral-100 text-neutral-800">
            <Loading />
        </div>
    );
};

export default register;
