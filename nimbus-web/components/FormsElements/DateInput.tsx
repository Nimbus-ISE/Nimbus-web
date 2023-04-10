import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { ThemeProvider } from "@mui/material/styles";
import { nimbusTheme, datePickerStyles } from "../../styles/NimbusMuiTheme";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { PlanContext } from "../Plan";
import { InputAdornment } from "@mui/material";
import convertDateToUTCPlus7 from "@/utils/convertUTC7ISOString";

const datePickerClass =
    "bg-gray-100 rounded-xl hover:opacity-70 focus:bg-white";

const DateInput = () => {
    const { formData, setFormDataField } = React.useContext(PlanContext);
    const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
    const [endDate, setEndDate] = React.useState<Dayjs | null>(null);

    React.useEffect(() => {
        if (startDate && endDate) {
            setFormDataField("date", [
                convertDateToUTCPlus7(
                    startDate.toDate().toISOString() as string
                ),
                convertDateToUTCPlus7(endDate.toDate().toISOString() as string),
            ]);
        }
    }, [startDate, endDate]);

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            e.preventDefault();
            ref.current.focus();
        }
    };

    const ref = React.useRef<any>();

    return (
        <ThemeProvider theme={nimbusTheme}>
            <div ref={ref} className="flex flex-wrap justify-center mx-auto">
                <div className="start-date my-2 mx-3 cursor-pointer">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                            value={startDate}
                            onChange={(newValue) => {
                                setStartDate(newValue);
                                console.log(startDate);
                            }}
                            label={startDate ? "" : "Start Date"}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    defaultValue={
                                        formData.date ? formData.date[0] : ""
                                    }
                                    onKeyDown={handleKeyDown}
                                    className={datePickerClass}
                                    sx={datePickerStyles}
                                    InputLabelProps={{ shrink: false }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <CalendarMonthIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                            inputFormat="DD/MM/YYYY"
                            maxDate={endDate}
                            closeOnSelect={false}
                            disablePast
                            autoFocus={false}
                        />
                    </LocalizationProvider>
                </div>
                <div
                    className="flex items-center justify-center dateLabel"
                    style={{ color: "rgb(107 114 128)" }}
                >
                    {startDate && endDate ? "to" : ""}
                </div>
                <div className="end-date my-2 mx-3">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                            label={endDate ? "" : "End Date"}
                            value={endDate}
                            onChange={(newValue) => {
                                setEndDate(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    defaultValue={
                                        formData.date ? formData.date[1] : ""
                                    }
                                    onKeyDown={handleKeyDown}
                                    className={datePickerClass}
                                    sx={datePickerStyles}
                                    InputLabelProps={{ shrink: false }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <CalendarMonthIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                            inputFormat="DD/MM/YYYY"
                            minDate={startDate}
                            closeOnSelect={false}
                            disablePast
                            autoFocus={false}
                        />
                    </LocalizationProvider>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default DateInput;
