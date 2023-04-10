import * as React from "react";
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
    const [tripType, setTripType] = React.useState<number>(0);

    React.useEffect(() => {
        setFormDataField("tripType", tripType);
    }, [tripType]);

    const handleClick = (choice: string) => () => {
        setTripType(choices.indexOf(choice));
        console.log(choice, tripType);
    };

    return (
        <ThemeProvider theme={nimbusTheme}>
            <div className="flex flex-initial flex-wrap justify-center">
                {choices.map((data) => {
                    return (
                        <Chip
                            icon={
                                data === "Chill" ? (
                                    <EmojiFoodBeverageIcon />
                                ) : data === "Balanced" ? (
                                    <NightlifeIcon />
                                ) : (
                                    <HikingIcon />
                                )
                            }
                            key={data}
                            label={data}
                            className={"shadow-md distance-" + data}
                            onClick={handleClick(data)}
                            color={
                                data === choices[tripType] ? "success" : "info"
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
