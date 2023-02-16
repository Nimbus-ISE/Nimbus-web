import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const datePickerStyles = {
    width: 175,
    "& fieldset": {
        borderColor: "rgb(243 244 246)",
        borderWidth: "2px",
        borderRadius: "12px",
    },
    "& .MuiSvgIcon-root": {
        color: "#9ca3af",
    },
    "& .MuiOutlinedInput-root": {
        color: "#9ca3af",
    },
    "& .MuiOutlinedInput-root:hover": {
        "& > fieldset": {
            borderColor: "#f5f5f7",
        },
    },
    "& .MuiFormLabel-root": {
        color: "#9ca3af",
    },
    "& .MuiInputBase-root": {
        paddingRight: "20px",
    },
    "& .MuiInputBase-root:focus": {
        backgroundColor: "white",
    },
};

const datePickerClass =
    "bg-gray-100 rounded-xl hover:brightness-125 focus:bg-white";

const DateInput = (props: any) => {
    const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
    const [endDate, setEndDate] = React.useState<Dayjs | null>(null);
    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-wrap justify-evenly mx-auto">
                <div className="start-date my-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={startDate}
                            onChange={(newValue) => {
                                setStartDate(newValue);
                            }}
                            label="Start date"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    className={datePickerClass}
                                    sx={datePickerStyles}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </div>
                <div className="end-date my-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="End Date"
                            value={endDate}
                            onChange={(newValue) => {
                                setEndDate(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    className={datePickerClass}
                                    sx={datePickerStyles}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default DateInput;
