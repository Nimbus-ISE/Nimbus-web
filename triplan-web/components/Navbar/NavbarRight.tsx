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
        <div className="grid grid-flow-col gap-4 px-5 text-md">
            {!isLoading && !user ? (
                <>
                    {listLogin.map((navItem) => (
                        <RouteButton
                            name={navItem.name}
                            route={navItem.route}
                        />
                    ))}
                    <Image
                        className="rounded-full w-[40px] h-[40px] shadow-md"
                        src="/images/guest.jpg"
                        alt="Profile picture"
                        width={40}
                        height={40}
                    />
                </>
            ) : !isLoading ? (
                <>
                    <Button
                        onClick={onCheckout}
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
                        <div className="m-auto font-montserrat">Upgrade</div>
                    </Button>
                    {listLogout.map((navItem) => (
                        <RouteButton
                            name={navItem.name}
                            route={navItem.route}
                        />
                    ))}
                    <img
                        className="rounded-full w-[40px] h-[40px] bg-black shadow-md"
                        src={user.picture as string}
                        alt="Profile picture"
                    />
                </>
            ) : null}
        </div>
    );
};

export default NavbarRight;
