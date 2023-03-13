import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { ThemeProvider } from "@mui/material";
import { nimbusTheme, distanceStyles } from "../../styles/NimbusMuiTheme";
import HikingIcon from "@mui/icons-material/Hiking";
import NightlifeIcon from "@mui/icons-material/Nightlife";

interface IProps {
    value: string;
}

const tripTypes = ["Hangout", "Travel"];

const TripTypeInput = (props: IProps) => {
    const [tripType, setTripType] = React.useState<string>("");

    const handleClick = (choice: string) => () => {
        console.log(choice);
        setTripType(choice);
    };

    return (
        <ThemeProvider theme={nimbusTheme}>
            <div className="flex flex-initial flex-wrap justify-center">
                {tripTypes.map((data) => {
                    return (
                        <Chip
                            icon={
                                data === "Travel" ? (
                                    <HikingIcon />
                                ) : (
                                    <NightlifeIcon />
                                )
                            }
                            key={data}
                            label={data}
                            className={"shadow-md distance-" + data}
                            onClick={handleClick(data)}
                            color={data === tripType ? "success" : "info"}
                            sx={distanceStyles}
                            variant="filled"
                        />
                    );
                })}
            </div>
        </ThemeProvider>
    );
};

export default TripTypeInput;
