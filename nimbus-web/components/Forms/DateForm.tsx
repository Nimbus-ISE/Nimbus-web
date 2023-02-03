import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateForm = (props: any) => {
    const [startValue, setStartValue] = React.useState<Dayjs | null>(null);
    const [endValue, setEndValue] = React.useState<Dayjs | null>(null);
    return (
        <div className="flex flex-wrap justify-evenly mx-auto">
            <div className="start-date my-2">
                <LocalizationProvider dateAdapter={AdapterDayjs} injectFirst>
                    <DatePicker
                        value={startValue}
                        onChange={(newValue) => {
                            setStartValue(newValue);
                        }}
                        label={startValue === null ? "start date" : ""}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                className="bg-gray-100 appearance-none border-0 border-gray-100 rounded-xl py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white hover:opacity-70"
                                sx={{ borderStyle: "none" }}
                                InputLabelProps={{ shrink: false }}
                            />
                        )}
                        className="bg-gray-100 appearance-none border-2 border-gray-100 rounded-xl py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white hover:opacity-70"
                    />
                </LocalizationProvider>
            </div>
            <div className="end-date my-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="End Date"
                        value={endValue}
                        onChange={(newValue) => {
                            setEndValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        </div>
    );
};

export default DateForm;
