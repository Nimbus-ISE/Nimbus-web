import React from "react";
import LocationForm from "./LocationForm";

const Form = (props: any) => {
  return (
    <>
      <div className="flex-col text-black max-w-2xl min-h-96 rounded-xl justify-center overflow-hidden shadow-lg bg-white py-12 px-12">
        <LocationForm />
      </div>
    </>
  )
}

export default Form;