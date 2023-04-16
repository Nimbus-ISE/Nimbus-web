import Card from "@/components/Cards/Card";
import React from "react";
import useGridColumns from "@/hooks/useGridColumns";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

interface IProps {
    planList: Array<unknown>;
}

const PlanCard = ({ planList }: IProps) => {
    const [expand, setExpand] = React.useState<boolean>(false);
    const [cols, setCols] = React.useState<number>(0);
    const gridColumnsClass = useGridColumns("plan-card-container");

    const handleOnClick = () => {
        setExpand((prev) => !prev);
    };

    React.useEffect(() => {
        if (gridColumnsClass) setCols(Number(gridColumnsClass.split("-")[2]));
    }, [gridColumnsClass]);
    return (
        <div
            id="plan-card-container"
            className="flex flex-col md:w-[80%] mx-auto"
        >
            <div
                className="text-xl font-semibold text-neutral-500
                 border-b-neutral-500 border-b-[1px] pb-1"
            >
                SAVED PLANS
            </div>
            <div
                className={`grid gap-5 ${gridColumnsClass} w-fit mx-auto my-5`}
            >
                {!expand && planList.length > cols
                    ? [...planList].splice(0, cols).map((location: any) => (
                          <div key={location.loc_id}>
                              <Card location={location} />
                          </div>
                      ))
                    : planList.map((location: any) => (
                          <div key={location.loc_id}>
                              <Card location={location} />
                          </div>
                      ))}
            </div>
            {planList.length > cols ? (
                <button
                    onClick={handleOnClick}
                    className="text-tricolorgreen mx-auto w-52"
                >
                    {expand ? (
                        <div>
                            Close <ExpandLessRoundedIcon />
                        </div>
                    ) : (
                        <div>
                            Expand <ExpandMoreRoundedIcon />
                        </div>
                    )}
                </button>
            ) : null}
        </div>
    );
};

export default PlanCard;
