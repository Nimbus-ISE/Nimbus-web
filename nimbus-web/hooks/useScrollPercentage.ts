import React from "react";

interface IProps {
    rootId?: string;
}

const useScrollPercentage = ({ rootId }: IProps) => {
    const [percent, setPercent] = React.useState<number>(0);
    const calculatePercent = (root: Element) => {
        const height = root.scrollHeight - root.clientHeight;
        const scrolled = (root.scrollTop / height) * 100;
        setPercent(scrolled);
    };
    React.useEffect(() => {
        const root = rootId ? document.getElementById(rootId) : undefined;
        if (root) {
            root.addEventListener("scroll", () => calculatePercent(root));
            return () =>
                root.removeEventListener("scroll", () =>
                    calculatePercent(root)
                );
        } else {
            addEventListener("scroll", () =>
                calculatePercent(document.documentElement)
            );
            return () =>
                removeEventListener("scroll", () =>
                    calculatePercent(document.documentElement)
                );
        }
    }, []);
    return percent;
};

export default useScrollPercentage;
