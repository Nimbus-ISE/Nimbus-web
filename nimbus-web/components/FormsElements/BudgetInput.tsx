import * as React from "react";
import { NumericFormat } from "react-number-format";

const budgetClassName =
    "w-full text-l h-14 bg-gray-100 shadow-md appearance-none border-2 border-gray-100 rounded-xl py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-gray-100 hover:opacity-70";
const budgetValid = "budget-input " + budgetClassName;
const budgetInvalid = "budget-input-invalid " + budgetClassName;

const BudgetInput = (props: any) => {
    const [value, setValue] = React.useState<number>();
    const [isValid, setIsValid] = React.useState<boolean>(true);
    React.useEffect(() => {
        console.log(value), [value];
    });

    const handleValueChange = (event: any) => {
        const num = event.value;
        const regex = /^([1-9][0-9]{2}|[1-9][0-9]{3,5}|1000000)$/;
        console.log(num, num.toString().match(regex));
        setIsValid(num.toString().match(regex));
        setValue(num);
    };

    return (
        <>
            <NumericFormat
                onValueChange={handleValueChange}
                thousandSeparator={true}
                decimalScale={0}
                className={isValid ? budgetValid : budgetInvalid}
                placeholder="Enter your budget"
                allowNegative={false}
            />
            <span className={isValid ? "help-block" : "help-block-invalid"}>
                Please enter a budget between 100 and 1,000,000 Baht.
            </span>
        </>
    );
};

export default BudgetInput;
