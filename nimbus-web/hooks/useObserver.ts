import React from "react";

interface IProps {
    elementId: string;
    threshold?: number;
    delay?: number;
    rootId?: string;
}

const useObserver = ({ elementId, threshold, delay, rootId }: IProps) => {
    const [active, setActive] = React.useState<boolean>(false);
    React.useEffect(() => {
        const doc = document.getElementById(elementId);
        const root = rootId ? document.getElementById(rootId) : undefined;
        if (elementId && doc) {
            let observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            console.log(elementId, "INTERSECTING");
                            setTimeout(() => setActive(true), delay);
                            observer.unobserve(doc);
                        }
                    });
                },
                {
                    threshold: threshold,
                    root: root,
                }
            );
            observer.observe(doc);
            return () => observer.unobserve(doc);
        }
    }, [elementId]);
    return active;
};

export default useObserver;
