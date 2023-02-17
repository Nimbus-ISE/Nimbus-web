import React from "react";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material";
import { nimbusTheme, TagsStyles } from "../../styles/NimbusMuiTheme";

const tags = [
    "Mall",
    "Restaurant",
    "Religion",
    "Nature",
    "Asian",
    "Thai",
    "Shopping",
    "Park",
    "Must See Attraction",
    "Beach",
    "Local Culture",
    "Local Cuisine",
    "Luxury",
    "History",
    "Wine",
    "Outdoor",
    "Wellness & Spa",
    "Safari",
    "Sustainable Travel",
    "Local Beer",
    "Live Sporting Event",
    "Arts & Theatre",
    "Museum",
    "Nightlife",
    "Adventure & Sports",
];

let selected: string[] = [];

const TagsSelection = () => {
    const handleClick = (selectedTag: string) => () => {
        if (selected.indexOf(selectedTag) > -1) {
            selected = selected.filter((e) => e !== selectedTag);
        } else {
            selected.push(selectedTag);
        }
        console.log(selected);
        setSelectTag(selected);
    };

    const [selectTag, setSelectTag] = React.useState<string[]>(selected);
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
                                color="secondary"
                                sx={TagsStyles}
                                variant={
                                    selected.indexOf(data) > -1
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
