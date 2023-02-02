import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateForm = (props: any) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    return (
        <>
            <div className="flex-col text-black max-w-2xl min-h-96 rounded-xl justify-center overflow-hidden shadow-lg bg-white py-12 px-12">
                <form action="/" method="">
                    <div className="flex justify-items-start">
                        <h1 className="text-4xl font-extrabold px-0 py-5">
                            Select Dates
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-aroundr">
                        <div className="start-date my-2">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Start Date"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className="end-date my-2">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="End Date"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className="my-7 text-xs flex justify-center">
                        <input
                            className="loc-input w-full text-l h-14 bg-gray-100 appearance-none border-2 border-gray-100 rounded-xl py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white hover:opacity-70"
                            type="text"
                            placeholder="Enter Location of Interest"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default DateForm;
