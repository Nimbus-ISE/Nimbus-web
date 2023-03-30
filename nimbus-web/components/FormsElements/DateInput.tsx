import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider } from "@mui/material/styles";
import { nimbusTheme, datePickerStyles } from "../../styles/NimbusMuiTheme";
import { PlanContext } from "../Plan";

const datePickerClass =
    "bg-gray-100 rounded-xl hover:opacity-70 focus:bg-white";

const DateInput = () => {
    const { setFormDataField } = React.useContext(PlanContext);
    const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
    const [endDate, setEndDate] = React.useState<Dayjs | null>(null);

    React.useEffect(() => {
        setFormDataField("date", [
            startDate?.toDate().toDateString(),
            endDate?.toDate().toDateString(),
        ]);
    }, [startDate, endDate]);

    return (
        <ThemeProvider theme={nimbusTheme}>
            <div className="flex flex-wrap justify-center mx-auto">
                <div className="start-date my-2 mx-3">
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
                            inputFormat="DD/MM/YYYY"
                            maxDate={endDate}
                            disablePast
                        />
                    </LocalizationProvider>
                </div>
                <div className="end-date my-2 mx-3">
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
                            inputFormat="DD/MM/YYYY"
                            minDate={startDate}
                            disablePast
                        />
                    </LocalizationProvider>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default DateInput;
