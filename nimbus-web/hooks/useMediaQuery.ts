import React from "react";

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = React.useState<boolean | undefined>();
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            setMatches(window.matchMedia(query).matches);
        }
    }, []);
    React.useEffect(() => {
        window.matchMedia(query).addEventListener("change", (e) => {
            setMatches(e.matches);
        });
        return () =>
            window.matchMedia(query).removeEventListener("change", (e) => {
                setMatches(e.matches);
            });
    }, []);

    return matches;
};

export default useMediaQuery;
