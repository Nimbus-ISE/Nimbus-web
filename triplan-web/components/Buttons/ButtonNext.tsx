import React from "react";

const ButtonNext = (props: any) => {
  return (
    <>
      <button className="text-white font-bold py-0 px-4 h-10 rounded-xl hover:scale-105 duration-300" style={{backgroundColor:"#45D8D0"}}>
        <div className="flex justify-center items-center">          
          <p className="">NEXT&nbsp;</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-2.5 h-2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>
        </div>
      </button>
    </>
  )
}

export default ButtonNext;