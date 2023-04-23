import React from "react";
import Chip from "@mui/material/Chip";
import { Button, ThemeProvider } from "@mui/material";
import { nimbusTheme, TagsStyles } from "../../styles/NimbusMuiTheme";
import { PlanContext } from "../Plan";
import { tags } from "@/misc";
import router from "next/router";

const formDataKeys = [
    "locationId",
    "date",
    "tripType",
    "budget",
    "travelMethod",
    "tags",
];

const progress = Array(6).fill(false);
progress[3] = true; // default = 0 for budgetInput

const TagsSelection = () => {
    const { formData, setFormDataField } = React.useContext(PlanContext);
    const [selectTag, setSelectTag] = React.useState<string[]>([]);
    const [payload, setPayload] = React.useState<string>("");
    const [invalid, setInvalid] = React.useState<boolean>(false);
    // const [tempData, setTempData] = React.useState<IFormData>();
    const [inputProgess, setInputProgess] = React.useState<boolean[]>(progress);

    const handleClick = (tag: string) => () => {
        let newSelectTag = [...selectTag];
        if (newSelectTag.indexOf(tag) > -1) {
            newSelectTag = newSelectTag.filter(
                (element: string) => element !== tag
            );
        } else {
            newSelectTag.push(tag);
        }
        console.log(newSelectTag);
        setSelectTag(newSelectTag);
    };

    React.useEffect(() => {
        setFormDataField("tags", selectTag);
    }, [selectTag]);

    // React.useEffect(() => {
    //     if (formData) {
    //         const data: IFormData = {
    //             must_include: formData.locationId,
    //             start_date: formData.date ? formData.date[0] : undefined,
    //             end_date: formData.date ? formData.date[1] : undefined,
    //             trip_pace: formData.tripType,
    //             budget: formData.budget,
    //             travel_method: formData.travelMethod,
    //             tags: formData.tags ? formData.tags.join() : undefined,
    //         };
    //         setTempData(data);
    //     }
    // }, [formData]);

    // React.useEffect(() => {
    //     if (
    //         tempData?.start_date &&
    //         tempData.end_date &&
    //         tempData.must_include
    //     ) {
    //         setInvalid(false);
    //     }
    // });

    React.useEffect(() => {
        formDataKeys.map((data, index) => {
            if ((10 % index !== 0 || index == 1) && formData[data]) {
                inputProgess[index] = true;
            }
            if (index == 2 && formData[data] > -1) {
                inputProgess[2] = true;
            }
            if (index == 5 && formData[data] && formData[data].length > 0) {
                inputProgess[5] = true;
            } else {
                inputProgess[5] = false;
            }
        });
    });

    React.useEffect(() => {
        if (inputProgess.every((element) => element === true)) {
            setInvalid(false);
        } else {
            setInvalid(true);
        }
    });

    const handleContinue = async () => {
        // setIsConfirmActive(true);
        // if (tempData && !(tempData.start_date || tempData.end_date)) {
        //     setInvalid(true);
        // } else {
        //     router.push(`/map/${encodeURIComponent(payload)}`);
        //   }

        console.log(inputProgess);
        console.log(formData);

        if (inputProgess.every((element) => element === true)) {
            router.push(`/map/${encodeURIComponent(payload)}`);
        }
    };

    return (
        <div className="mx-auto">
            <ThemeProvider theme={nimbusTheme}>
                <div className="flex flex-wrap justify-center">
                    {tags.sort().map((data) => {
                        return (
                            <Chip
                                key={data}
                                label={data}
                                onClick={handleClick(data)}
                                color={
                                    selectTag.indexOf(data) > -1
                                        ? "success"
                                        : "secondary"
                                }
                                sx={TagsStyles}
                                variant={
                                    selectTag.indexOf(data) > -1
                                        ? "filled"
                                        : "outlined"
                                }
                                className="shadow-md"
                                // // limiting tags selection to 5
                                // disabled={
                                //     selectTag.length != 5
                                //         ? false
                                //         : selectTag.includes(data)
                                //         ? false
                                //         : true
                                // }
                            />
                        );
                    })}
                </div>
                <div className="flex flex-col mx-auto w-full">
                    <Button
                        onClick={handleContinue}
                        variant="outlined"
                        disabled={invalid ? true : false}
                        sx={{
                            borderRadius: "999px",
                            borderColor: "black",
                            color: "black",
                            marginTop: "30px",
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
                        <div className="m-auto font-montserrat">Continue</div>
                    </Button>
                    {invalid ? (
                        <div className="relative">
                            <div className="absolute my-2 text-xs flex justify-center align-middle w-full text-[#00C4CC] ">
                                Please complete all inputs before continuing!
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </ThemeProvider>
        </div>
    );
};

export default TagsSelection;
