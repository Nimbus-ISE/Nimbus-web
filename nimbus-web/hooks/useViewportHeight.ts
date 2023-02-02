import React from "react";

const useViewportHeight = () => {
    //a custom hook is required to get the real viewport height that is offset by navbar
    const [height, setHeight] = React.useState<number>(64);
    React.useEffect(() => {
        const navbarElement = document.getElementById("navbar");
        if (navbarElement) setHeight(navbarElement?.offsetHeight);
    }, []);
    return {
        height: window.innerHeight - height,
    };
};

export default useViewportHeight;
