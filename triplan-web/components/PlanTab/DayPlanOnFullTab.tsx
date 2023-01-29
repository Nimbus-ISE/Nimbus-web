const DayPlanOnFullTab = () => {
    return (
        <>
            <div className="flex gap-4">
                <div className="text-[3rem] font-extrabold text-[#171810]">
                    Bangkok 1{" "}
                </div>
                <div className="text-[3rem] font-extrabold text-gray-400 opacity-75 italic ">
                    Plan Overview{" "}
                </div>
            </div>

            <div className="flex w-full">
                <div className="flex flex-col w-[33%] h-[35rem] bg-[#f6f6f6] border-r-slate-400 border-r-2 overflow-y-scroll items-center scrollbar-hide">
                    <div className="flex flex-col items-center m-2  ">
                        <div className="h-8 w-20 rounded-2xl bg-sky-400 text-center text-white font-extrabold ">
                            Day 1
                        </div>
                        <div className="h-10 w-1 bg-red-400"></div>
                        <div className="h-28 w-28 bg-yellow-400 rounded-full"></div>
                        <div className="h-10 w-1 bg-red-400"></div>
                        <div className="h-16 w-16 bg-blue-400 rounded-full"></div>
                        <div className="h-10 w-1 bg-red-400"></div>
                        <div className="h-28 w-28 bg-yellow-400 rounded-full"></div>
                        <div className="h-10 w-1 bg-red-400"></div>
                        <div className="h-16 w-16 bg-blue-400 rounded-full"></div>
                        <div className="h-10 w-1 bg-red-400"></div>
                        <div className="h-28 w-28 bg-yellow-400 rounded-full"></div>
                        <div className="h-10 w-1 bg-red-400"></div>
                        <div className="h-16 w-16 bg-blue-400 rounded-full"></div>
                        <div className="h-10 w-1 bg-red-400"></div>
                        <div className="h-28 w-28 bg-yellow-400 rounded-full"></div>
                    </div>
                </div>

                <div className="flex flex-col w-[33%] h-[35rem] bg-[#f6f6f6] border-r-slate-400 border-r-2 "></div>
                <div className="flex flex-col w-[33%] h-[35rem] bg-[#f6f6f6] "></div>
            </div>
        </>
    );
};
export default DayPlanOnFullTab;
