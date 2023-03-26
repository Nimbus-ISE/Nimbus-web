import React from "react";
import { PlanContext } from "../Plan";

const ConfirmForm = () => {
    const { setIsConfirmActive } = React.useContext(PlanContext);
    return (
        <div>
            <div className="m-auto">
                <div className="text-center text-4xl font-extrabold px-0 py-5">
                    Confirm Inputs
                </div>
                <button
                    onClick={() => {
                        setIsConfirmActive(false);
                    }}
                    className="my-7 text-base flex justify-center"
                >
                    {`<-`} back
                </button>
                <div className="my-7 text-base flex justify-center">test</div>
            </div>
        </div>
    );
};

export default ConfirmForm;
