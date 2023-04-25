import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { PlanContext, ScrollContext } from "../Plan";
import convertDateToUTCPlus7 from "@/utils/convertUTC7ISOString";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const tripPace = ["Chill", "Balanced", "Travel"];
const tripBudget = ["0", "100", "500", "1000", "More than 1000"];

const ConfirmForm = () => {
    const router = useRouter();
    const { formData, setIsConfirmActive, setFormDataField } =
        React.useContext(PlanContext);
    const [payload, setPayload] = React.useState<string>("");

    // React.useEffect(() => {
    //     if (formData.date) {
    //         setFormDataField("date", [
    //             convertDateToUTCPlus7(
    //                 startDate.toDate().toISOString() as string
    //             ),
    //             convertDateToUTCPlus7(
    //                 endDate.toDate().toISOString() as string
    //             ),
    //         ]);
    //     }
    // }, [formData]);

    const handleOnClick = () => {
        setFormDataField("date", [
            convertDateToUTCPlus7(
                formData.date[0].toDate().toISOString() as string
            ),
            convertDateToUTCPlus7(
                formData.date[1].toDate().toISOString() as string
            ),
        ]);

        console.log(formData);
        console.log(payload);

        pushPayload();
    };

    const pushPayload = () => {
        router.push(`/map/${encodeURIComponent(payload)}`);
    };

    React.useEffect(() => {
        if (formData) {
            const data: IFormData = {
                must_include: formData.locationId
                    ? formData.locationId[0]
                    : undefined,
                start_date: formData.date ? formData.date[0] : undefined,
                end_date: formData.date ? formData.date[1] : undefined,
                trip_pace: formData.tripType,
                budget: formData.budget,
                travel_method: formData.travelMethod,
                tags: formData.tags ? formData.tags.join() : undefined,
            };
            console.log(data);
            setPayload(JSON.stringify(data));
        }
    }, [formData]);
    return (
        <div className="m-auto flex pb-10 h-full mx-auto w-[90%] md:w-[75%] overflow-y-scroll flex flex-col items-center">
            <div className="m-auto w-full">
                <div className="text-center text-4xl text-neutral-700 font-extrabold px-0 pt-5">
                    Confirm Inputs
                </div>
                <button
                    onClick={() => {
                        setIsConfirmActive(false);
                    }}
                    className="w-[90%] md:w-[75%] my-2 text-base text-left mx-auto flex"
                >
                    <div className="flex items-center text-neutral-700">
                        <ArrowBackIosIcon sx={{ height: "12px" }} /> back
                    </div>
                </button>
                <div className="flex flex-col my-5 sm:my-4 text-xs sm:text-sm w-full justify-center text-center">
                    <header className="text-neutral-400 mx-auto w-[90%] md:w-[75%] text-left pb-1">
                        {" "}
                        Traveling to:{" "}
                    </header>
                    <div className="relative bg-gray-100 text-neutral-700 pt-2 pb-2 shadow-l ring-1 w-[90%] mx-auto md:w-[75%] ring-gray-900/5 sm:mx-auto rounded-lg sm:px-15 shadow-md">
                        {formData.locationId ? formData.locationId[1] : null}
                    </div>

                    <header className="text-neutral-400 mx-auto w-[90%] md:w-[75%] text-left pt-2 pb-1">
                        {" "}
                        Plan Duration:{" "}
                    </header>
                    <div className="flex gap-2 mx-auto w-[90%] md:w-[75%]">
                        <div className="basis-1/2 bg-gray-100 text-neutral-700 pt-2 pb-2 shadow-l ring-1 ring-gray-900/5 rounded-lg sm:px-15 shadow-md">
                            <div className="m-auto ">
                                {formData.date
                                    ? new Date(
                                          formData.date[0]
                                      ).toLocaleDateString()
                                    : null}
                            </div>
                        </div>
                        <div className="basis-1/2 bg-gray-100 text-neutral-700 pt-2 pb-2 shadow-l ring-1 w-[50%] ring-gray-900/5 rounded-lg sm:px-15 shadow-md">
                            <div className="m-auto">
                                {formData.date
                                    ? new Date(
                                          formData.date[1]
                                      ).toLocaleDateString()
                                    : null}
                            </div>
                        </div>
                    </div>

                    <header className="text-neutral-400 text-left mx-auto w-[90%] md:w-[75%] pt-2 pb-1">
                        {" "}
                        Trip Pace:{" "}
                    </header>
                    <div className="relative bg-gray-100 text-neutral-700 pt-2 pb-2 shadow-l ring-1 mx-auto w-[90%] md:w-[75%] ring-gray-900/5 sm:mx-auto rounded-lg sm:px-15 shadow-md">
                        {tripPace[formData.tripType]}
                    </div>

                    <header className="text-neutral-400 text-left mx-auto w-[90%] md:w-[75%] pt-2 pb-1">
                        {" "}
                        Budget Level:{" "}
                    </header>
                    <div className="relative bg-gray-100 text-neutral-700 pt-2 pb-2 shadow-l ring-1 mx-auto w-[90%] md:w-[75%] ring-gray-900/5 sm:mx-auto rounded-lg sm:px-15 shadow-md">
                        {parseInt(tripBudget[formData.budget]) > 0 &&
                        parseInt(tripBudget[formData.budget]) > 4
                            ? "Less than "
                            : ""}
                        {tripBudget[formData.budget]} THB per Location
                    </div>

                    <header className="text-neutral-400 text-left mx-auto w-[90%] md:w-[75%] pt-2 pb-1">
                        {" "}
                        Travel Method:{" "}
                    </header>
                    <div className="relative bg-gray-100 text-neutral-700 px-10 pt-2 pb-2 shadow-l ring-1 mx-auto w-[90%] md:w-[75%] ring-gray-900/5 sm:mx-auto rounded-lg sm:px-15 shadow-md">
                        {formData.travelMethod
                            ? formData.travelMethod
                                  .replace("walk", " Walking")
                                  .replace("drive", "Driving")
                            : null}
                    </div>

                    <header className="text-neutral-400 text-left mx-auto w-[90%] md:w-[75%] pt-2 pb-1">
                        {" "}
                        Tags:{" "}
                    </header>
                    <div className="grid grid-cols-3 gap-2 mx-auto pt-1 w-[90%] md:w-[75%] text-xs">
                        {formData.tags.map((tag: string) => (
                            <div className="flex bg-gray-200 text-neutral-700 shadow-l ring-1 w-full h-8 ring-gray-900/5 mx-auto max-w-lg rounded-lg px-15 shadow-md">
                                <div className="m-auto">{tag}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex mx-auto w-full">
                    <Button
                        onClick={handleOnClick}
                        variant="outlined"
                        sx={{
                            borderRadius: "999px",
                            borderColor: "black",
                            color: "black",
                            marginTop: "10px",
                            paddingX: "5rem",
                            marginX: "auto",
                            textTransform: "none",
                            "&:hover": {
                                color: "black",
                                backgroundColor: "Gainsboro",
                                borderColor: "gray",
                            },
                        }}
                    >
                        <div className="m-auto font-montserrat">Generate</div>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmForm;
function setFormDataField(arg0: string, arg1: string[]) {
    throw new Error("Function not implemented.");
}
