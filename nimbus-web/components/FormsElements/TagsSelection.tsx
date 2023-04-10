import React, { useContext } from "react";
import Chip from "@mui/material/Chip";
import { Button, ThemeProvider } from "@mui/material";
import { nimbusTheme, TagsStyles } from "../../styles/NimbusMuiTheme";
import { PlanContext } from "../Plan";
import { tags } from "@/misc";
import search from "@/pages/search";
import router from "next/router";

const TagsSelection = () => {
    const { formData, setFormDataField, setIsConfirmActive } =
        React.useContext(PlanContext);
    const [selectTag, setSelectTag] = React.useState<string[]>([]);
    const [payload, setPayload] = React.useState<string>("");
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

    const ref = React.useRef<any>();

    React.useEffect(() => {
        if (formData) {
            const data = {
                //location: formData.location,
                start_date: formData.date ? formData.date[0] : null,
                end_date: formData.date ? formData.date[1] : null,
                //trip_type: formData.tripType,
                budget: formData.budget,
                //distance: formData.tripDistance,
                tags: formData.tags ? formData.tags.join() : null,
            };
            console.log(data);
            setPayload(JSON.stringify(data));
        }
    }, [formData]);

    // const data = formData;

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
                                // className="shadow-md"
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
                            />
                        );
                    })}
                </div>
                <div className="flex mx-auto w-full">
                    <Button
                        onClick={async () => {
                            // setIsConfirmActive(true);
                            router.push(`/map/${encodeURIComponent(payload)}`);
                        }}
                        variant="outlined"
                        sx={{
                            borderRadius: "999px",
                            borderColor: "black",
                            color: "black",
                            marginTop: "50px",
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
