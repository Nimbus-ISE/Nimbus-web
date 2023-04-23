import React from "react";
import Chip from "@mui/material/Chip";
import { ThemeProvider } from "@mui/material";
import { nimbusTheme, ButtonChipStyles } from "../../styles/NimbusMuiTheme";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import HikingIcon from "@mui/icons-material/Hiking";
import { PlanContext } from "../Plan";

const choices = ["Chill", "Balanced", "Travel"];

const TripTypeInput = () => {
    const { setFormDataField } = React.useContext(PlanContext);
    const [tripType, setTripType] = React.useState<number>(-1);

    const handleClick = (index: number) => {
        setTripType(index);
        setFormDataField("tripType", index);
    };

    return (
        <ThemeProvider theme={nimbusTheme}>
            <div className="flex flex-initial flex-wrap justify-center">
                {choices.map((choice, index) => {
                    return (
                        <Chip
                            icon={
                                choice === "Chill" ? (
                                    <EmojiFoodBeverageIcon />
                                ) : choice === "Balanced" ? (
                                    <NightlifeIcon />
                                ) : (
                                    <HikingIcon />
                                )
                            }
                            key={choice}
                            label={choice}
                            className={"shadow-md distance-" + choice}
                            onClick={() => handleClick(index)}
                            color={
                                choice === choices[tripType]
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
    );
};

export default TripTypeInput;
