import React from "react";
import { NumericFormat } from "react-number-format";
import { PlanContext } from "../Plan";

const budgetClassName =
    "w-full text-l h-14 bg-gray-100 shadow-md appearance-none border-2 border-gray-100 rounded-xl py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-gray-100 hover:opacity-70 max-w-[30rem]";
const budgetValid = "budget-input " + budgetClassName;
const budgetInvalid = "budget-input-invalid " + budgetClassName;

const BudgetInput = () => {
    const { formData, setFormDataField } = React.useContext(PlanContext);
    const [value, setValue] = React.useState<number>();
    const [isValid, setIsValid] = React.useState<boolean>(true);

    React.useEffect(() => {
        setFormDataField("budget", value);
    }, [value]);

    const handleValueChange = (event: any) => {
        const num = event.value;
        const regex = /^([1-9][0-9]{2}|[1-9][0-9]{3,5}|1000000)$/;
        console.log(num, num.toString().match(regex));
        setIsValid(num.toString().match(regex));
        setValue(num);
    };

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    return (
        <>
            <NumericFormat
                defaultValue={formData.budget}
                onValueChange={handleValueChange}
                autoFocus={false}
                thousandSeparator={true}
                decimalScale={0}
                className={isValid ? budgetValid : budgetInvalid}
                placeholder="Enter your budget"
                allowNegative={false}
                onKeyDown={handleKeyDown}
            />
            <span className={isValid ? "help-block" : "help-block-invalid"}>
                Please enter a budget between 100 and 1,000,000 Baht.
            </span>
        </>
    );
};

export default BudgetInput;
