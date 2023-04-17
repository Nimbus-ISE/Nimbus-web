import React from "react";
import useElementSize from "./useElementSize";

//depends on useElementSize hook

const grid = [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
];

const useGridColumns = (elementId?: string) => {
    const [columnsClass, setColumnsClass] = React.useState<string>("");
    const size = useElementSize(elementId);
    React.useEffect(() => {
        const cols = Math.floor((size.width - 80) / 288);
        const cols1 = Math.floor((size.width - 80 - (cols - 1) * 20) / 288);
        setColumnsClass(grid[cols1 - 1]);
    }, [size]);
    return columnsClass;
};

export default useGridColumns;
