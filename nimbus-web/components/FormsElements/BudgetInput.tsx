import React from "react";
import { NumericFormat } from "react-number-format";
import { PlanContext, ScrollContext } from "../Plan";
import Slider, { SliderValueLabelProps } from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import { ThemeProvider } from "@mui/material";
import { nimbusTheme } from "../../styles/NimbusMuiTheme";

import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import MoneyOffCsredRoundedIcon from "@mui/icons-material/MoneyOffCsredRounded";

function ValueLabelComponent(props: SliderValueLabelProps) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={30} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

function valueMapper(value: number) {
    if (value === 0) return <MoneyOffCsredRoundedIcon fontSize="small" />;
    return [...Array(value)].map(() => (
        <AttachMoneyRoundedIcon fontSize="small" />
    ));
}

const marks = [
    {
        value: 1,
        label: "100",
    },
    {
        value: 2,
        label: "500",
    },
    {
        value: 3,
        label: "1000",
    },
    {
        value: 4,
        label: ">1000",
    },
];

const BudgetInput = (props: any) => {
    const { currentValue } = React.useContext(ScrollContext);
    const { formData, setFormDataField } = React.useContext(PlanContext);
    const [value, setValue] = React.useState<number>(
        formData.budget ? formData.budget : 1
    );

    const handleChange = (event: any, newValue: number | number[]) => {
        console.log(event.target.value);
        setValue(event.target.value);
    };

    React.useEffect(() => {
        if (currentValue === 3) {
            console.log("set budget", value);
            setFormDataField("budget", value);
        }
    }, [value, currentValue]);

    return (
        <>
            <ThemeProvider theme={nimbusTheme}>
                <div className="flex mx-auto items-center h-full max-w-[15rem] w-full md:scale-100 scale-[90%]">
                    <Slider
                        onChange={handleChange}
                        slots={{
                            valueLabel: ValueLabelComponent,
                        }}
                        // defaultValue={0}
                        value={value}
                        valueLabelDisplay="on"
                        step={1}
                        min={1}
                        max={4}
                        color="secondary"
                        marks={marks}
                        valueLabelFormat={(value) => {
                            return (
                                <div style={{ textAlign: "center" }}>
                                    {value === 1
                                        ? "below 100 THB"
                                        : value === 2
                                        ? "below 500 THB"
                                        : value === 3
                                        ? "below 1000 THB"
                                        : "above 1000 THB"}
                                    {/* <br />
                                    {valueMapper(value)} */}
                                </div>
                            );
                        }}
                    />
                </div>
            </ThemeProvider>
        </>
    );
};

export default BudgetInput;
