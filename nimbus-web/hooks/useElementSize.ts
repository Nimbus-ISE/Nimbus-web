import React from "react";

const useElementSize = (elementId: string) => {
    const [elementSize, setElementSize] = React.useState({
        width: 0,
        height: 0,
    });
    const [element, setElement] = React.useState<any>(null);
    const handleResize = () => {
        setElementSize({
            width: element.offsetWidth,
            height: element.offsetHeight,
        });
    };
    React.useEffect(() => {
        console.log(elementId);
        if (elementId) {
            setElement(document.getElementById(elementId));
        }
    }, [elementId]);
    React.useEffect(() => {
        if (element) {
            handleResize();
            window.addEventListener("resize", handleResize);
        }
        return () => window.removeEventListener("resize", handleResize);
    }, [element]);

    return elementSize;
};

export default useElementSize;
