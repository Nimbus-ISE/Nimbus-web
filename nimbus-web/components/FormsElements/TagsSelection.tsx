import React from "react";
import Chip from "@mui/material/Chip";
import { ThemeProvider } from "@mui/material";
import { nimbusTheme, TagsStyles } from "../../styles/NimbusMuiTheme";

const tags = [
    "Mall",
    "Religion",
    "Nature",
    "Temple",
    "Shopping",
    "Must See Attraction",
    "Beach",
    "Local Culture",
    "Luxury",
    "Historical Place",
    "Outdoor",
    "Wellness & Spa",
    "Zoo",
    "Market",
    "Sports",
    "Arts",
    "Theater",
    "Museum",
    "Nightlife",
    "Adventure",
    "Amusement Park",
    "Family",
    "Modern",
    "Restaurant",
    "Park",
];

const TagsSelection = () => {
    const [selectTag, setSelectTag] = React.useState<string[]>([]);
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
    return (
        <>
            <ThemeProvider theme={nimbusTheme}>
                <div className="basis-auto">
                    {tags.map((data) => {
                        return (
                            <Chip
                                key={data}
                                label={data}
                                onClick={handleClick(data)}
                                // className="shadow-md"
                                color={
                                    selectTag.indexOf(data) > -1
                                        ? "primary"
                                        : "secondary"
                                }
                                sx={TagsStyles}
                                variant={
                                    selectTag.indexOf(data) > -1
                                        ? "outlined"
                                        : "filled"
                                }
                            />
                        );
                    })}
                </div>
            </ThemeProvider>
        </>
    );
};

export default TagsSelection;
