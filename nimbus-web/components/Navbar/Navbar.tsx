import { useRouter } from "next/router";
import RouteButton from "./RouteButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import MobileSidebar from "./MobileSidebar";
import NavbarRight from "./NavbarRight";
import NavbarLogo from "./NavbarLogo";
import MobileLeft from "./MobileLeft";
import TagsButton from "../Search/TagsButton";
import SearchBar from "../Search/SearchBar";
import getPremiumType from "@/utils/getPremiumType";
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface IProps {
    user: UserProfile | undefined;
    isLoading: boolean;
}

const leftList = [
    {
        name: "Home",
        route: "/",
    },
    {
        name: "Plan",
        route: "/plan",
    },
    {
        name: "Discover",
        route: "/discover",
    },
];

const rightListLogin = [
    {
        name: "Login",
        route: "/api/auth/login",
    },
];

const rightListLogout = [
    {
        name: "Profile",
        route: "/profile",
    },
    {
        name: "Signout",
        route: "/api/auth/logout",
    },
];

const Navbar = ({ user, isLoading }: IProps) => {
    const premiumType = getPremiumType(user);
    const router = useRouter();
    const isLogoVisible = useMediaQuery("(min-width: 950px)");
    const isLargerThanMedium = useMediaQuery("(min-width: 800px)");
    const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
    const calculateMobileList = () => {
        return user && !isLoading && premiumType === "None"
            ? [
                  ...leftList,
                  { name: "Search", route: "/search" },
                  "divider",
                  { name: "Register Place", route: "/register" },
                  "divider",
                  "profile",
                  rightListLogout[0],
                  "upgrade",
                  rightListLogout[1],
              ]
            : !user
            ? [
                  ...leftList,
                  { name: "Search", route: "/search" },
                  "divider",
                  { name: "Register Place", route: "/register" },
                  "divider",
                  "profile",
                  ...rightListLogin,
              ]
            : [
                  ...leftList,
                  { name: "Search", route: "/search" },
                  "divider",
                  { name: "Register Place", route: "/register" },
                  "divider",
                  "profile",
                  rightListLogout[0],
                  rightListLogout[1],
              ];
    };
    const [mobileList, setMobileList] = React.useState<Array<any>>(
        calculateMobileList()
    );
    React.useEffect(() => {
        console.log(mobileList);
        setMobileList(calculateMobileList());
    }, [user, isLoading]);
    return (
        <div className="fixed w-full z-[100] top-0 left-0 select-none">
            <div
                id="navbar"
                className="relative bg-white flex gap-1 items-center place-items-center 
                justify-between h-[64px] text-neutral-600"
            >
                {isLargerThanMedium ? (
                    <div className="flex justify-between w-full">
                        <div className="flex pl-3 text-md mr-5">
                            {isLogoVisible ? <NavbarLogo /> : null}
                            <div className="grid grid-flow-col gap-1 ml-3">
                                {leftList.map((navItem) => (
                                    <RouteButton
                                        name={navItem.name}
                                        route={navItem.route}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-flow-col gap-4">
                            <SearchBar />
                            <TagsButton />
                        </div>
                        <NavbarRight isLoading={isLoading} user={user} />
                    </div>
                ) : (
                    <div className=" w-full">
                        <MobileSidebar
                            list={mobileList}
                            openDrawer={openDrawer}
                            setOpenDrawer={setOpenDrawer}
                            user={user}
                        />
                        <MobileLeft setOpenDrawer={setOpenDrawer} />
                    </div>
                )}
            </div>
            <div className="flex w-full h-[3px] bg-gradient-to-r from-tricolorgreen to-yellow-300" />
        </div>
    );
};
export default Navbar;
