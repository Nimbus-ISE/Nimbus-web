import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import RouteButton from "./RouteButton";
import Image from "next/image";
import { useRouter } from "next/router";
import { checkout } from "@/checkout";
import { Button } from "@mui/material";

interface IProps {
    listLogin: Array<any>;
    listLogout: Array<any>;
    isLoading: boolean;
    user: any;
}

const NavbarRight = ({ listLogin, listLogout, isLoading, user }: IProps) => {
    const router = useRouter();
    const onCheckout = () => {
        checkout({
            lineItems: [
                {
                    price: "price_1MTOqPJkSNPL7Ztsvxm18ftd",
                    quantity: 1,
                },
            ],
        });
    };
    return (
        <div className="grid grid-flow-col gap-5 px-5 text-md">
            {!isLoading && !user ? (
                <>
                    {listLogin.map((navItem) => (
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
                    <button onClick={onCheckout} className="flex px-5">
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                marginY: "auto",
                                textTransform: "none",
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faCrown}
                                color="orange"
                                className="m-auto mr-2 drop-shadow-sm"
                            />
                            <div className="m-auto">Upgrade</div>
                        </Button>
                    </button>
                    {listLogout.map((navItem) => (
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
    );
};

export default NavbarRight;
