import { checkout } from "@/checkout";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import RouteButton from "./RouteButton";

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
    const onLogin = () => {
        router.push("/api/auth/login");
    };
    return (
        <div className="fixed w-full z-[100] top-0 left-0 drop-shadow-sm">
            <div
                className="relative bg-neutral-100 flex gap-1 items-center place-items-center 
                justify-between h-16 text-neutral-600"
            >
                <div className="grid grid-flow-col gap-5 px-5 text-md">
                    <div className="text-2xl font-bold px-2">TRIPLAN</div>
                    {leftList.map((navItem) => (
                        <RouteButton
                            name={navItem.name}
                            router={router}
                            route={navItem.route}
                        />
                    ))}
                </div>
                <div className="grid grid-flow-col gap-5 px-5 text-md">
                    {!isLoading && !user ? (
                        <>
                            {rightListLogin.map((navItem) => (
                                <RouteButton
                                    name={navItem.name}
                                    router={router}
                                    route={navItem.route}
                                />
                            ))}
                            <button>
                                <Image
                                    className="rounded-full w-10 h-10 bg-red-200"
                                    src="/images/BlackHole.jpg"
                                    alt="Profile picture"
                                    width={40}
                                    height={40}
                                />
                            </button>
                        </>
                    ) : !isLoading ? (
                        <>
                            <button
                                onClick={() => {
                                    checkout({
                                        lineItems: [
                                            {
                                                price: "price_1MTOqPJkSNPL7Ztsvxm18ftd",
                                                quantity: 1,
                                            },
                                        ],
                                    });
                                }}
                                className="flex px-5"
                            >
                                <FontAwesomeIcon
                                    icon={faCrown}
                                    color="orange"
                                    className="m-auto mr-2 drop-shadow-sm"
                                />
                                <div className="m-auto hover:text-tricolorgreen">
                                    Upgrade
                                </div>
                            </button>
                            {rightListLogout.map((navItem) => (
                                <RouteButton
                                    name={navItem.name}
                                    router={router}
                                    route={navItem.route}
                                />
                            ))}
                            <button>
                                <Image
                                    className="rounded-full w-10 h-10 bg-red-200"
                                    src="/images/ThorsWell.jpg"
                                    alt="Profile picture"
                                    width={40}
                                    height={40}
                                />
                            </button>
                        </>
                    ) : null}
                </div>
            </div>
            <div className="flex w-full h-1.5 shadow-sm bg-gradient-to-r from-tricolorgreen to-yellow-300" />
        </div>
    );
};
export default Navbar;
