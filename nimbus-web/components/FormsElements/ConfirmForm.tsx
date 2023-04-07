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
                <div className="text-center text-4xl font-extrabold px-0 pt-5 pb-2">
                    Confirm Inputs
                </div>
                <button
                    onClick={() => {
                        setIsConfirmActive(false);
                    }}
                    className="my-1 text-base flex justify-center"
                >
                    {`<-`} back
                </button>
                <div className="flex flex-col my-7 text-base justify-center text-center">
                    <header className ="text-gray-400 text-left text-xs text-base sm:text-sm pb-1"> Traveling to: </header>
                    <div className ="relative text-base sm:text-sm md:text-lg lg:text-xl bg-gray px-10 pt-2 pb-2 shadow-l ring-1 w-full ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-15">
                        {formData.location}
                    </div>

                    <header className ="text-gray-400 text-left text-xs text-base sm:text-sm pt-2 pb-1"> Plan Duration: </header>
                    <div className="flex flex-wrap">
                        <div className ="text-base sm:text-sm md:text-lg lg:text-xl bg-gray px-10 pt-2 pb-2 shadow-l ring-1 w-1/2 ring-gray-900/5 sm:rounded-lg sm:px-15">
                            <div className = "m-auto">
                                {formData["date"][0]}
                            </div>
                        </div>
                        <div className ="text-base sm:text-sm md:text-lg lg:text-xl bg-gray px-10 pt-2 pb-2 shadow-l ring-1 w-1/2 ring-gray-900/5 sm:rounded-lg sm:px-15">
                            <div className = "m-auto">
                                 {formData["date"][1]}
                            </div>
                        </div>
                    </div>

                    <header className ="text-gray-400 text-left text-xs text-base sm:text-sm pt-2 pb-1"> Type of Trip: </header>
                    <div className ="relative text-base sm:text-sm md:text-lg lg:text-xl bg-gray px-10 pt-2 pb-2 shadow-l ring-1 w-full ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-15">
                        {formData.tripType}
                    </div>

                    <header className ="text-gray-400 text-left text-xs text-base sm:text-sm pt-2 pb-1"> Budget: </header>
                    <div className ="relative text-base sm:text-sm md:text-lg lg:text-xl bg-gray px-10 pt-2 pb-2 shadow-l ring-1 w-full ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-15">
                        ฿ {formData.budget}
                    </div>

                    <header className ="text-gray-400 text-left text-xs text-base sm:text-sm pt-2 pb-1"> Tags: </header>
                    <div className="flex flex-wrap">
                        <div className ="flex text-xs text-base sm:text-sm md:text-lg lg:text-xl bg-gray-200 shadow-l ring-1 w-1/4 ring-gray-900/5 mx-auto max-w-lg rounded-lg px-15">
                            <div className = "m-auto">
                                {formData.tags[0]}
                            </div>
                        </div>
                        <div className ="flex text-xs text-base sm:text-sm md:text-lg lg:text-xl bg-gray-200 shadow-l ring-1 w-1/4 ring-gray-900/5 mx-auto max-w-lg rounded-lg px-15">
                            <div className = "m-auto">
                                {formData.tags[1]}
                            </div>
                        </div>
                        <div className ="flex text-xs text-base sm:text-sm md:text-lg lg:text-xl bg-gray-200 shadow-l ring-1 w-1/4 ring-gray-900/5 mx-auto max-w-lg rounded-lg px-15">
                            <div className = "m-auto">
                                {formData.tags[2]}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mx-auto w-full">
                    <Button
                        onClick={() => {}}
                        variant="outlined"
                        sx={{
                            borderRadius: "999px",
                            borderColor: "black",
                            color: "black",
                            marginTop: "10px",
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
