import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faBars } from "@fortawesome/free-solid-svg-icons";
import RouteButton from "./RouteButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import MobileSidebar from "./MobileSidebar";
import NavbarRight from "./NavbarRight";
import NavbarLogo from "./NavbarLogo";

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
        name: "About Us",
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
        name: "Check Profile",
        route: "/profile",
    },
    {
        name: "Signout",
        route: "/api/auth/logout",
    },
];

const Navbar = ({ user, isLoading }: IProps) => {
    const router = useRouter();
    const isLargerThanMedium = useMediaQuery("(min-width: 768px)");
    const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
    return (
        <div className="fixed w-full z-[100] top-0 left-0 drop-shadow-sm select-none">
            {!isLargerThanMedium && (
                <MobileSidebar
                    list={leftList}
                    openDrawer={openDrawer}
                    setOpenDrawer={setOpenDrawer}
                />
            )}
            <div
                className="relative bg-neutral-100 flex gap-1 items-center place-items-center 
                justify-between h-16 text-neutral-600"
            >
                {isLargerThanMedium ? (
                    <>
                        <div className="flex px-5 text-md">
                            <NavbarLogo />
                            <div className="grid grid-flow-col gap-5 px-5">
                                {leftList.map((navItem) => (
                                    <RouteButton
                                        name={navItem.name}
                                        router={router}
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
                    <div
                        className="relative bg-neutral-100 flex gap-1 items-center place-items-center 
                        justify-between h-16 text-neutral-600"
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            color="gray"
                            onClick={() => setOpenDrawer(true)}
                            className="m-auto mx-5 drop-shadow-sm fa-xl"
                        />
                        <NavbarLogo />
                    </div>
                )}
            </div>
            <div className="flex w-full h-1 shadow-sm bg-gradient-to-r from-tricolorgreen to-yellow-300" />
        </div>
    );
};
export default Navbar;
