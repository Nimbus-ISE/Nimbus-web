import React from "react";

const useViewportHeight = () => {
    //a custom hook is required to get the real viewport height that is offset by navbar
    const [height, setHeight] = React.useState<number>(window.innerHeight - 64);
    React.useEffect(() => {
        window.addEventListener("resize", () =>
            setHeight(window.innerHeight - 64)
        );
        return () =>
            window.removeEventListener("resize", () =>
                setHeight(window.innerHeight - 64)
            );
    }, []);
    return {
        height: height,
    };
};

export default useViewportHeight;
