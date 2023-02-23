import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ThemeProvider } from "@mui/material";
import { nimbusTheme, TripTypeStyles } from "../../styles/NimbusMuiTheme";

interface IProps {
    value: string;
}

const DistanceInput = (props: IProps) => {
    const [tripDistance, setTripDistance] = React.useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setTripDistance(event.target.value);
    };

    return (
        <ThemeProvider theme={nimbusTheme}>
            <div className="flex flex-wrap justify-evenly mx-auto">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" shrink={false}>
                        {tripDistance == "" && "Select distance"}
                    </InputLabel>
                    <Select
                        labelId="Type"
                        id="Type"
                        value={tripDistance}
                        label="Select trip type"
                        onChange={handleChange}
                        className="select bg-gray-100 rounded-xl hover:opacity-70 focus:bg-white w-60"
                        sx={TripTypeStyles}
                    >
                        <MenuItem value={"Close"}>Close</MenuItem>
                        <MenuItem value={"Medium"}>Medium</MenuItem>
                        <MenuItem value={"Far"}>Far</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </ThemeProvider>
    );
};

export default DistanceInput;
