import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { ThemeProvider } from "@mui/material";
import { nimbusTheme, distanceStyles } from "../../styles/NimbusMuiTheme";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import TimeToLeaveRoundedIcon from "@mui/icons-material/TimeToLeaveRounded";
import DirectionsRailwayRoundedIcon from "@mui/icons-material/DirectionsRailwayRounded";

const choices = ["Close", "Medium", "Far"];

const DistanceInput = () => {
    const [tripDistance, setTripDistance] = React.useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setTripDistance(event.target.value);
    };

    const handleClick = (choice: string) => () => {
        console.log(choice);
        setTripDistance(choice);
    };

    return (
        <>
            <ThemeProvider theme={nimbusTheme}>
                <div className="flex flex-initial flex-wrap justify-center">
                    {choices.map((data) => {
                        return (
                            <Chip
                                icon={
                                    data === "Close" ? (
                                        <DirectionsWalkRoundedIcon />
                                    ) : data === "Medium" ? (
                                        <TimeToLeaveRoundedIcon />
                                    ) : (
                                        <DirectionsRailwayRoundedIcon />
                                    )
                                }
                                key={data}
                                label={data}
                                className={"shadow-md distance-" + data}
                                onClick={handleClick(data)}
                                color={
                                    data === tripDistance ? "success" : "info"
                                }
                                sx={distanceStyles}
                                variant="filled"
                            />
                        );
                    })}
                </div>
            </ThemeProvider>
        </>
    );
};

export default DistanceInput;
