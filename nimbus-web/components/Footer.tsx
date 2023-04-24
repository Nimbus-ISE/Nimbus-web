import FilterDramaRounded from "@mui/icons-material/FilterDramaRounded";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import React from "react";

const usefulLinks = [
    "FAQ",
    "Sitemap",
    "Career",
    "Terms of Use",
    "Privacy Policy",
];

const menus = [
    {
        str: "Home",
        route: "/",
    },
    { str: "Plan", route: "/plan" },
    { str: "Discover", route: "/discover" },
    { str: "Search by tags", route: "/search" },
    { str: "Register Place", route: "/register" },
];

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
            <div className="pt-5 z-10">
                <div className="flex flex-col md:flex-row w-full pl-5">
                    <div className="flex flex-col justify-evenly p-5 md:w-[35%] w-full">
                        <div className="flex text-3xl font-bold mb-5 drop-shadow-md">
                            <FilterDramaRounded className="my-auto" />
                            <div className="mx-2">NIMBUS</div>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">ABOUT US</div>
                            <div className="text-sm">
                                Welcome to Nimbus, your personalized trip
                                planner for an unforgettable experience in
                                Thailand. We help both international and
                                domestic tourists create the best trip
                                experience with our handpicked destinations.
                                Trust Nimbus to make your trip to Thailand
                                unforgettable.
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-5 w-full md:w-[65%]">
                        <div className="px-5 md:border-l-[0.75px] border-neutral-200">
                            <div className="font-semibold mb-3">NAVIGATION</div>
                            <div className="flex flex-col gap-2">
                                {menus.map((menu) => {
                                    return (
                                        <Link
                                            href={menu.route}
                                            className="text-sm hover:underline w-fit text-left"
                                        >
                                            {menu.str}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="px-5 border-l-[0.75px] md:border-x-[0.75px] border-neutral-200">
                            <div className="font-semibold mb-3">
                                USEFUL LINKS
                            </div>
                            <div className="flex flex-col gap-2">
                                {usefulLinks.map((link) => {
                                    return (
                                        <Link
                                            href="/"
                                            className="text-sm hover:underline w-fit text-left"
                                        >
                                            {link}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="pl-5 col-span-2 mt-5 md:mt-0 sm:col-span-3 md:col-span-1">
                            <div className="font-semibold mb-3">CONTACT US</div>
                            <div className="flex flex-col gap-3">
                                <div className="text-sm">
                                    Building 2, Faculty of Engineering,
                                    Chulalongkorn University, Bangkok, 10330
                                    Thailand
                                </div>
                                <div className="flex gap-2 text-sm w-full break-all">
                                    <EmailIcon />
                                    Nimbus.ISE@gmail.com
                                </div>
                                <div className="flex gap-2 text-sm">
                                    <CallIcon />
                                    (+66) 98 951 1051
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between mt-3 p-5 bg-black bg-opacity-20">
                    <div className="flex">
                        <div className="font-semibold my-auto">
                            CONNECT WITH US
                        </div>
                        <div className="px-5 grid grid-cols-4 gap-3 my-auto">
                            <Link
                                href="https://github.com/Nimbus-ISE/Nimbus-web"
                                className="flex rounded-md bg-neutral-100 bg-opacity-20 w-8 h-8 
                                shadow-md hover:bg-opacity-30 transition duration-100"
                            >
                                <GitHubIcon className="m-auto" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/"
                                className="flex rounded-md bg-neutral-100 bg-opacity-20 w-8 h-8 
                                shadow-md hover:bg-opacity-30 transition duration-100"
                            >
                                <InstagramIcon className="m-auto" />
                            </Link>
                            <Link
                                href="https://twitter.com/"
                                className="flex rounded-md bg-neutral-100 bg-opacity-20 w-8 h-8 
                                shadow-md hover:bg-opacity-30 transition duration-100"
                            >
                                <TwitterIcon className="m-auto" />
                            </Link>
                            <Link
                                href="https://www.facebook.com/"
                                className="flex rounded-md bg-neutral-100 bg-opacity-20 w-8 h-8 
                                shadow-md hover:bg-opacity-30 transition duration-100"
                            >
                                <FacebookIcon className="m-auto" />
                            </Link>
                        </div>
                    </div>
                    <div className="text-sm my-auto md:py-0 py-3">
                        &copy; Copyright {new Date().getFullYear()} Nimbus ISE
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
