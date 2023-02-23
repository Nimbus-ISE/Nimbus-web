import * as React from "react";
import { NumericFormat } from "react-number-format";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

const BudgetInput = (props: any) => {
    return (
        <>
            <NumericFormat
                thousandSeparator={true}
                className="budget-input w-full text-l h-14 bg-gray-100 appearance-none border-2 border-gray-100 rounded-xl py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-gray-100 hover:opacity-70"
                placeholder="Enter your budget"
                allownegative="false"
            />

            <input
                className="budget-input w-full text-l h-14 bg-gray-100 appearance-none border-2 border-gray-100 rounded-xl py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-gray-100 hover:opacity-70"
                type="number"
                min="100"
                max="1000000"
                placeholder="Enter your budget"
            />
        </>
    );
};

export default BudgetInput;
