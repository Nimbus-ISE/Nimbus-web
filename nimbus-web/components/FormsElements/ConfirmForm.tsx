import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { PlanContext, ScrollContext } from "../Plan";

const ConfirmForm = () => {
    const router = useRouter();
    const { formData, setIsConfirmActive } = React.useContext(PlanContext);
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
                <div className="flex flex-col my-7 text-base justify-center text-center">
                    {Object.keys(formData).map((key) => {
                        return (
                            <div>
                                {key} : {formData[key]}
                            </div>
                        );
                    })}
                </div>
                <div className="flex mx-auto w-full">
                    <Button
                        onClick={() => {}}
                        variant="outlined"
                        sx={{
                            borderRadius: "999px",
                            borderColor: "black",
                            color: "black",
                            marginTop: "50px",
                            paddingX: "5rem",
                            marginX: "auto",
                            textTransform: "none",
                            "&:hover": {
                                color: "black",
                                backgroundColor: "Gainsboro",
                                borderColor: "gray",
                            },
                        }}
                    >
                        <div className="m-auto font-montserrat">Generate</div>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmForm;
