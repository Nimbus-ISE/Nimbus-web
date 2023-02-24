import * as React from "react";
import { NumericFormat } from "react-number-format";

const budgetClass =
    "budget-input w-full text-l h-14 bg-gray-100 appearance-none border-2 border-gray-100 rounded-xl py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-gray-100 hover:opacity-70";

const budgetInvalid =
    "budget-input-invalid w-full text-l h-14 bg-gray-100 appearance-none border-2 border-gray-100 rounded-xl py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-gray-100 hover:opacity-70";

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
                id={"budget_input"}
                onValueChange={handleValueChange}
                thousandSeparator={true}
                className={isValid ? budgetClass : budgetInvalid}
                placeholder="Enter your budget"
                allowNegative={false}
            />
            <span className={isValid ? "help-block" : "help-block-invalid"}>
                Please enter a budget between 100 to 1,000,000 Baht.
            </span>
        </>
    );
};

export default BudgetInput;
