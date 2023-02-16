import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material";

interface IProps {
    value: string;
}

const TripTypeInput = (props: IProps) => {
    const [tripType, setTripType] = React.useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setTripType(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-wrap justify-evenly mx-auto">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" shrink={false}>
                        {tripType == "" && "Select trip type"}
                    </InputLabel>
                    <Select
                        labelId="Type"
                        id="Type"
                        value={tripType}
                        label="Select trip type"
                        onChange={handleChange}
                        className="select bg-gray-100 rounded-xl hover:opacity-80 focus:bg-white w-60"
                        sx={TripTypeStyles}
                    >
                        <MenuItem value={"hangout"}>Hangout</MenuItem>
                        <MenuItem value={"travel"}>Travel</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </ThemeProvider>
    );
};

export default TripTypeInput;

const theme = createTheme({
    palette: {
        primary: {
            main: "#40E0D0",
            dark: "#40E0D0",
        },
        error: {
            main: "#e57373",
            dark: "#e57373",
        },
    },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
});

const TripTypeStyles = {
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
};
