import * as React from "react";
import Chip from "@mui/material/Chip";
import { ThemeProvider } from "@mui/material";
import { nimbusTheme, ButtonChipStyles } from "../../styles/NimbusMuiTheme";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import TimeToLeaveRoundedIcon from "@mui/icons-material/TimeToLeaveRounded";
import DirectionsRailwayRoundedIcon from "@mui/icons-material/DirectionsRailwayRounded";
import { PlanContext } from "../Plan";

const choices = ["Close", "Medium", "Far"];

const DistanceInput = () => {
    const { setFormDataField } = React.useContext(PlanContext);
    const [tripDistance, setTripDistance] = React.useState<number>(0);

    const handleClick = (choice: string) => () => {
        setTripDistance(choices.indexOf(choice));
        console.log(choice, tripDistance);
    };
    React.useEffect(() => {
        setFormDataField("tripDistance", tripDistance);
    }, [tripDistance]);

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
                                    data === choices[tripDistance]
                                        ? "success"
                                        : "info"
                                }
                                sx={ButtonChipStyles}
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
