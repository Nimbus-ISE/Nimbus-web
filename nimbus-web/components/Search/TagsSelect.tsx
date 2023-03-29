import React from "react";
import Chip from "@mui/material/Chip";
import { Button, ThemeProvider } from "@mui/material";
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

interface IProps {
    callback: (tags: Array<string>) => void;
}

const TagsSelect = ({ callback }: IProps) => {
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
        <div className="mx-auto">
            <ThemeProvider theme={nimbusTheme}>
                <div className="flex flex-wrap justify-center border-[0.75px] p-5 rounded-xl border-teal-400">
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
                                className="shadow-md"
                            />
                        );
                    })}
                </div>
                <div className="flex mx-auto mt-2 w-full">
                    <Button
                        onClick={() => {
                            callback(selectTag);
                        }}
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
                        <div className="m-auto font-montserrat">Search</div>
                    </Button>
                </div>
            </ThemeProvider>
        </div>
    );
};

export default TagsSelect;
