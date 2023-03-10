import useElementSize from "@/hooks/useElementSize";
import React from "react";
import Node from "./Node";
import ProgressBar from "./ProgressBar";
import useScrollPercentage from "@/hooks/useScrollPercentage";
import { ScrollContext } from "../Plan";

interface IProps {
    formArr: Array<IForm>;
}

const PageIndicator = ({ formArr }: IProps) => {
    const { setCurrentValue } = React.useContext(ScrollContext);
    const percent = useScrollPercentage({ rootId: "form-container" });
    const indicatorContainerSize = useElementSize("indicator-container");
    const nodeSize = 40;
    const percentOffset = () => {
        //makes node light up when inside node boundary
        return (nodeSize / indicatorContainerSize.height / 2) * 100;
    };
    const calculateCurrent = () => {
        const offsetValue =
            (percent + percentOffset()) / (100 / (formArr.length - 1));
        //sets real value of current node in full decimal (to let higher components know if it is between a node or not)
        setCurrentValue(percent / (100 / (formArr.length - 1)));
        return Math.floor(offsetValue) + 1;
    };
    return (
        <div
            id="indicator-container"
            className="relative grid gap-8 w-fit h-full place-items-center shrink-0"
        >
            {formArr.map((item, index) => (
                <Node
                    size={nodeSize}
                    active={index + 1 <= calculateCurrent()}
                    isCurrent={index + 1 === calculateCurrent()}
                    index={index}
                    name={item.type}
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
