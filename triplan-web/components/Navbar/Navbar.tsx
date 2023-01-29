import { useRouter } from "next/router";
import RouteButton from "./RouteButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import MobileSidebar from "./MobileSidebar";
import NavbarRight from "./NavbarRight";
import NavbarLogo from "./NavbarLogo";
import MobileLeft from "./MobileLeft";

interface IProps {
    user: unknown;
    isLoading: boolean;
}

const leftList = [
    {
        name: "Home",
        route: "/",
    },
    {
        name: "Plan",
        route: "/",
    },
    {
        name: "About",
        route: "/",
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
    const router = useRouter();
    const isLargerThanMedium = useMediaQuery("(min-width: 800px)");
    const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
    const calculateMobileList = () => {
        return user && !isLoading
            ? [
                  ...leftList,
                  "divider",
                  "profile",
                  rightListLogout[0],
                  "upgrade",
                  rightListLogout[1],
              ]
            : [...leftList, "divider", "profile", ...rightListLogin];
    };
    const [mobileList, setMobileList] = React.useState<Array<any>>(
        calculateMobileList()
    );
    React.useEffect(() => {
        console.log(mobileList);
        setMobileList(calculateMobileList());
    }, [user, isLoading]);
    return (
        <div className="fixed w-full z-[100] top-0 left-0 drop-shadow-sm select-none">
            <div
                className="relative bg-white flex gap-1 items-center place-items-center 
                justify-between h-16 text-neutral-600"
            >
                {isLargerThanMedium ? (
                    <>
                        <div className="flex pl-5 text-md">
                            <NavbarLogo />
                            <div className="grid grid-flow-col gap-4 pl-5">
                                {leftList.map((navItem) => (
                                    <RouteButton
                                        name={navItem.name}
                                        route={navItem.route}
                                    />
                                ))}
                            </div>
                        </div>
                        <NavbarRight
                            listLogin={rightListLogin}
                            listLogout={rightListLogout}
                            isLoading={isLoading}
                            user={user}
                        />
                    </>
                ) : (
                    <div className="mr-5 w-[250px]">
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
            <div className="flex w-full h-1 shadow-sm bg-gradient-to-r from-tricolorgreen to-yellow-300" />
        </div>
    );
};
export default Navbar;
