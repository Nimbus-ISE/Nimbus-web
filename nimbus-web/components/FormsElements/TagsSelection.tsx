import React from "react";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material";
import { nimbusTheme } from "../../styles/NimbusMuiTheme";

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

const selected: string[] = [];

const TagsSelection = () => {
    const [selecetTag, setSelectTag] = React.useState<string[]>(selected);
    return (
        <>
            <ThemeProvider theme={nimbusTheme}>
                <div className="basis-auto">
                    {tags.map((data) => {
                        return (
                            <Chip
                                label={data}
                                className="m-1 hover:brightness-125"
                            />
                        );
                    })}
                </div>
            </ThemeProvider>
        </>
    );
};

export default TagsSelection;
