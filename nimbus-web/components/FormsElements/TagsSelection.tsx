import React from "react";
import Chip from "@mui/material/Chip";
import { Button, ThemeProvider } from "@mui/material";
import { nimbusTheme, TagsStyles } from "../../styles/NimbusMuiTheme";
import { PlanContext, ScrollContext } from "../Plan";
import { tags } from "@/misc";

const formDataKeys = [
    "locationId",
    "date",
    "tripType",
    "budget",
    "travelMethod",
    "tags",
];

const TagsSelection = () => {
    const {
        formData,
        setFormDataField,
        planProgess,
        setPlanProgress,
        setIsConfirmActive,
    } = React.useContext(PlanContext);
    const [selectTag, setSelectTag] = React.useState<string[]>(
        formData.tags ? formData.tags : []
    );

    const [invalid, setInvalid] = React.useState<boolean>(false);

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

    // Detecting the progress of the user input
    React.useEffect(() => {
        if (formData) {
            // console.log("update plan progress");
            const progress = formDataKeys.map((data, index) => {
                if (
                    (5 % index !== 0 || index === 1) &&
                    (formData[data] || formData[data] === 0)
                ) {
                    return true;
                }
                if (index === 2 && formData[data] > -1) {
                    return true;
                }
                if (
                    index === 5 &&
                    formData[data] &&
                    formData[data].length > 0
                ) {
                    return true;
                } else {
                    return false;
                }
            });
            setPlanProgress(progress);
        }
    }, [formData]);

    // Setting the form's state to "valid" when all inputs are valid
    React.useEffect(() => {
        if (planProgess.every((element: boolean) => element === true)) {
            setInvalid(false);
        } else {
            setInvalid(true);
        }
    });

    // When the user clicks the "continue" button
    const handleContinue = async () => {
        console.log(planProgess);
        console.log(formData);

        if (planProgess.every((element: boolean) => element === true)) {
            console.log("continue");
            setIsConfirmActive(true);
        }
        setIsConfirmActive(true);
    };

    return (
        <div className="mx-auto max-w-[40rem]">
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
                        // disabled={invalid ? true : false}
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
                        <div className="relative flex justify-center">
                            <div className="absolute my-2 text-xs flex justify-center align-middle text-center text-[#00C4CC] ">
                                Please complete all inputs first!
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
