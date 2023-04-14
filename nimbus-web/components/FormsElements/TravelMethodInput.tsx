import React from "react";
import Chip from "@mui/material/Chip";
import { ThemeProvider } from "@mui/material";
import { nimbusTheme, ButtonChipStyles } from "../../styles/NimbusMuiTheme";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import TimeToLeaveRoundedIcon from "@mui/icons-material/TimeToLeaveRounded";
import AltRouteRoundedIcon from "@mui/icons-material/AltRouteRounded";
import { PlanContext } from "../Plan";

const choices = [
    ["Drive", "drive"],
    ["Walk", "walk"],
    ["Either", "drive,walk"],
];

const TravelMethodInput = () => {
    const { setFormDataField } = React.useContext(PlanContext);
    const [travelMethod, setTravelMethod] = React.useState<number>(0);

    const handleClick = (index: number) => {
        setTravelMethod(index);
        setFormDataField("travelMethod", choices[index][1]);
    };
    React.useEffect(() => {
        setFormDataField("travelMethod", choices[0][1]);
    }, []);
    return (
        <ThemeProvider theme={nimbusTheme}>
            <div className="flex flex-initial flex-wrap justify-center">
                {choices.map((data, index) => {
                    return (
                        <Chip
                            icon={
                                index === 0 ? (
                                    <TimeToLeaveRoundedIcon />
                                ) : index === 1 ? (
                                    <DirectionsWalkRoundedIcon />
                                ) : (
                                    <AltRouteRoundedIcon />
                                )
                            }
                            key={data[0]}
                            label={data[0]}
                            className={"shadow-md distance-" + data}
                            onClick={() => handleClick(index)}
                            color={index === travelMethod ? "success" : "info"}
                            sx={ButtonChipStyles}
                            variant="filled"
                        />
                    );
                })}
            </div>
        </ThemeProvider>
    );
};

export default TravelMethodInput;
