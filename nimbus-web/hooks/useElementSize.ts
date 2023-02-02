import React from "react";

const useElementSize = (elementId: string) => {
    const [elementSize, setElementSize] = React.useState({
        width: 0,
        height: 0,
    });
    const [element, setElement] = React.useState<HTMLElement>();
    const handleResize = (element: HTMLElement) => {
        setElementSize({
            width: element.offsetWidth,
            height: element.offsetHeight,
        });
    };
    React.useEffect(() => {
        const element = document.getElementById(elementId);
        if (element) setElement(element);
    }, [elementId]);
    React.useEffect(() => {
        if (element) {
            handleResize(element);
            let observer = new ResizeObserver((entries) => {
                entries.forEach((entry) => {
                    handleResize(element);
                });
            });
            observer.observe(element);
            return () => observer.unobserve(element);
        }
    }, [element]);

    return elementSize;
};

export default useElementSize;
