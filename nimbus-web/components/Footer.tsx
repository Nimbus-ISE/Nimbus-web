import FilterDramaRounded from "@mui/icons-material/FilterDramaRounded";
import React from "react";

const Footer = () => {
    return (
        <div className="relative flex flex-col w-screen overflow-hidden text-white h-fit">
            <div className="opacity-70">
                <div className="absolute top-0 bottom-0 left-0 right-0 w-full bg-gradient-to-r from-cyan-600 to-teal-400 -z-[1]" />
            </div>
            <img
                src="/images/bg.webp"
                className="absolute object-cover object-bottom w-full h-full blur-md aspect-video -z-[2]"
            />
            <div className="p-5 z-10">
                <div className="flex w-full">
                    <div className="flex flex-col justify-evenly p-5 w-[40%]">
                        <div className="flex text-3xl font-bold mb-5">
                            <FilterDramaRounded className="my-auto" />
                            <div className="mx-2">NIMBUS</div>
                        </div>
                        <div>
                            <div className="font-semibold text-xl mb-2">
                                ABOUT US
                            </div>
                            <div className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Suscipit culpa saepe error
                                cupiditate autem, aut cumque fugit quibusdam,
                                non tempore modi et molestias at fuga totam ab!
                                Incidunt, quas dolores.
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-5 p-5 w-[60%]">
                        <div className="">
                            <div className="font-semibold mb-2">ITEM 1</div>
                            <div className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corporis dolore veniam modi
                                aut dolor eius provident earum doloremque?
                                Ipsum, a nostrum voluptatem ipsam asperiores
                                magnam eos architecto illum cum pariatur!
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold mb-2">ITEM 2</div>
                            <div className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corporis dolore veniam modi
                                aut dolor eius provident earum doloremque?
                                Ipsum, a nostrum voluptatem ipsam asperiores
                                magnam eos architecto illum cum pariatur!
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold mb-2">ITEM 3</div>
                            <div className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corporis dolore veniam modi
                                aut dolor eius provident earum doloremque?
                                Ipsum, a nostrum voluptatem ipsam asperiores
                                magnam eos architecto illum cum pariatur!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-5 px-5">
                    <div className="flex">
                        <div className="font-semibold">CONNECT WITH US</div>
                        <div className="px-5 grid grid-cols-4 gap-3">
                            <div className="rounded-sm bg-neutral-100 w-5 h-5" />
                            <div className="rounded-sm bg-neutral-100 w-5 h-5" />
                            <div className="rounded-sm bg-neutral-100 w-5 h-5" />
                            <div className="rounded-sm bg-neutral-100 w-5 h-5" />
                        </div>
                    </div>
                    <div className="text-sm">copyright stuff</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
