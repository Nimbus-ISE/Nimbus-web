import React from "react";
import Chip from "@mui/material/Chip";
import { Button, ThemeProvider } from "@mui/material";
import { nimbusTheme, TagsStyles } from "../../styles/NimbusMuiTheme";
import { PlanContext } from "../Plan";
import { tags } from "@/misc";
import router from "next/router";

const TagsSelection = () => {
    const { formData } = React.useContext(PlanContext);
    const [selectTag, setSelectTag] = React.useState<string[]>([]);
    const [payload, setPayload] = React.useState<string>("");
    const [alert, setAlert] = React.useState<boolean>(false);
    const [tempData, setTempData] = React.useState<IFormData>();

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

    // React.useEffect(() => {
    //     setFormDataField("tags", selectTag);
    // }, [selectTag]);

    const ref = React.useRef<any>();

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

    const handleContinue = async () => {
        // setIsConfirmActive(true);
        if (tempData && !(tempData.start_date || tempData.end_date)) {
            setAlert(true);
        } else {
            router.push(`/map/${encodeURIComponent(payload)}`);
        }
    };

    return (
        <div className="mx-auto">
            <ThemeProvider theme={nimbusTheme}>
                <div ref={ref} className="flex flex-wrap justify-center">
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
                                disabled={
                                    selectTag.length != 5
                                        ? false
                                        : selectTag.includes(data)
                                        ? false
                                        : true
                                }
                            />
                        );
                    })}
                </div>
                <div className="flex flex-col mx-auto w-full">
                    {alert ? (
                        <div className="relative">
                            <div className="absolute top-3 text-xs flex justify-center align-middle w-full text-[#00C4CC] ">
                                Please select valid date(s)!
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <Button
                        onClick={handleContinue}
                        variant="outlined"
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
                </div>
            </ThemeProvider>
        </div>
    );
};

export default TagsSelection;
