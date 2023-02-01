import useElementSize from "@/hooks/useElementSize";
import React from "react";
import Node from "./Node";
import ProgressBar from "./ProgressBar";
import useScrollPercentage from "@/hooks/useScrollPercentage";

interface IProps {
    list: Array<{
        name: string;
    }>;
}

const PageIndicator = ({ list }: IProps) => {
    const percent = useScrollPercentage({ rootId: "form-container" });
    const indicatorContainerSize = useElementSize("indicator-container");
    const nodeSize = 40;
    const percentOffset = () => {
        //makes node light up when inside node boundary
        return (nodeSize / indicatorContainerSize.height / 2) * 100;
    };
    const calculateCurrent = () => {
        const trueValue =
            (percent + percentOffset()) / (100 / (list.length - 1));
        return Math.floor(trueValue) + 1;
    };
    return (
        <div
            id="indicator-container"
            className="relative grid gap-10 w-fit h-full place-items-center"
        >
            {list.map((item, index) => (
                <Node
                    size={nodeSize}
                    active={index + 1 <= calculateCurrent()}
                    index={index}
                    name={item.name}
                />
            ))}
            <ProgressBar
                height={indicatorContainerSize.height - nodeSize}
                percent={percent}
            />
        </div>
    );
};

export default PageIndicator;
