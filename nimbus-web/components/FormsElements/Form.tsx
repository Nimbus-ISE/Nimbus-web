import useElementSize from "@/hooks/useElementSize";
import React, { ReactElement } from "react";
import BudgetInput from "./BudgetInput";
import DateForm from "./DateInput";
import TravelMethodInput from "./TravelMethodInput";
import LocationInput from "./LocationInput";
import TagsSelection from "./TagsSelection";
import TripTypeInput from "./TripTypeInput";
import { ScrollContext } from "../Plan";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import useMediaQuery from "@/hooks/useMediaQuery";
import { PlanContext } from "../Plan";

interface IProps {
    formArr: Array<IForm>;
}

const formMapper: { [key: string]: ReactElement<any, any> } = {
    Location: <LocationInput />,
    Dates: <DateForm />,
    Style: <TripTypeInput />,
    Budget: <BudgetInput />,
    Transport: <TravelMethodInput />,
    Tags: <TagsSelection />,
};

const Form = ({ formArr }: IProps) => {
    const { currentValue, setCurrentValue } = React.useContext(ScrollContext);
    const { height } = useElementSize("plan-card");
    const isLargerThanMedium = useMediaQuery("(min-width: 768px)");
    const [isFilled, setIsFilled] = React.useState<boolean>(false);
    const [alert, setAlert] = React.useState<boolean>(false);
    const { formData } = React.useContext(PlanContext);
    const [tempData, setTempData] = React.useState<IFormData>();

    React.useEffect(() => {
        if (formData) {
            const data: IFormData = {
                must_include: formData.locationId,
                start_date: formData.date ? formData.date[0] : undefined,
                end_date: formData.date ? formData.date[1] : undefined,
                trip_pace: formData.tripType,
                budget: formData.budget,
                travel_method: formData.travelMethod,
                tags: formData.tags ? formData.tags.join() : undefined,
            };
            setTempData(data);
        }
    }, [formData]);

    React.useEffect(() => {
        if (tempData?.start_date && tempData.end_date) {
            setAlert(false);
        }
    });

    const handleOnClick = (index: number, isForward: boolean) => {
        if (isForward) {
            if (
                index == 1 &&
                tempData &&
                !(tempData.start_date || tempData.end_date)
            ) {
                setAlert(true);
                // console.log("block scroll");
            } else {
                setAlert(false);
                setCurrentValue(index + 1);
                // console.log("scroll");
            }
            // setCurrentValue(index + 1);
        } else {
            setCurrentValue(index - 1);
        }
    };

    return (
        <form>
            {formArr.map((item, index) => {
                return (
                    <div
                        style={{ height: height }}
                        id="input-container"
                        className="flex flex-col overflow-y-scroll w-full text-neutral-700 mx-auto"
                    >
                        {index !== 0 ? (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleOnClick(index, false);
                                }}
                                className="flex p-3 w-full flex-1 group rounded-full"
                            >
                                <div className="bg-white h-11 w-11 p-2 flex rounded-full m-auto shadow-sm group-hover:-translate-y-3 transition duration-500">
                                    <ArrowUpward className="h-7 w-7 m-auto text-neutral-400 group-hover:text-tricolorgreen" />
                                </div>
                            </button>
                        ) : (
                            <div className="flex-1" />
                        )}
                        <div className="text-center text-2xl sm:text-3xl md:text-4xl text-neutral-700 font-extrabold px-0 py-5">
                            {item.title}
                        </div>
                        <div className="text-sm md:text-sm mx-auto max-w-[30rem] text-center">
                            {item.description}
                        </div>
                        <div className="flex-column">
                            <div className="my-7 text-xs flex justify-center w-full">
                                {formMapper[item.type]}
                            </div>
                            {/* {alert && index == 0 ? (
                                <div className="relative">
                                    <div className="absolute text-xs flex justify-center align-middle w-full">
                                        Please select a valid destination!
                                    </div>
                                </div>
                            ) : (
                                ""
                            )} */}
                            {alert && index == 1 ? (
                                <div className="relative">
                                    <div className="absolute text-xs flex justify-center align-middle w-full text-[#00C4CC] ">
                                        Please select valid date(s)!
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        {index !== formArr.length - 1 ? (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleOnClick(index, true);
                                }}
                                className="flex p-3 w-full flex-1 group rounded-full"
                            >
                                {}
                                <div className="bg-white h-11 w-11 p-2 flex rounded-full m-auto shadow-sm group-hover:translate-y-3 transition duration-500">
                                    <ArrowDownward className="h-7 w-7 m-auto text-neutral-400  group-hover:text-tricolorgreen" />
                                </div>
                            </button>
                        ) : (
                            <div className="flex-1" />
                        )}
                    </div>
                );
            })}
        </form>
    );
};

export default Form;
