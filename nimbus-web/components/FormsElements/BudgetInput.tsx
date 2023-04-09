import React from "react";
import { NumericFormat } from "react-number-format";
import { PlanContext } from "../Plan";
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

const BudgetInput = (props: any) => {
    // const { formData, setFormDataField } = React.useContext(PlanContext);
    const [value, setValue] = React.useState<number>(0);

    // React.useEffect(() => {
    //     setFormDataField("budget", value);
    // }, [value]);

    const handleChange = (event: any, newValue: number | number[]) => {
        console.log(event.target.value);
        setValue(event.target.value);
    };

    return (
        <>
            <ThemeProvider theme={nimbusTheme}>
                <div className="flex justify-center mx-auto items-center h-11/12 w-40 ">
                    <Slider
                        onChange={handleChange}
                        slots={{
                            valueLabel: ValueLabelComponent,
                        }}
                        // defaultValue={formData.budget}
                        defaultValue={value}
                        valueLabelDisplay="on"
                        step={1}
                        min={0}
                        max={4}
                        color="secondary"
                        marks
                        valueLabelFormat={(value) => {
                            return (
                                <div style={{ textAlign: "center" }}>
                                    {value === 0
                                        ? "no cost"
                                        : value === 1
                                        ? "below 100 THB"
                                        : value === 2
                                        ? "below 500 THB"
                                        : value === 3
                                        ? "below 1000 THB"
                                        : "above 1000 THB"}
                                    <br />
                                    {valueMapper(value)}
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
