import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { checkout } from "@/checkout";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import UserProfile from "../UserProfile";

const UserWindow = ({ user }: { user: any }) => {
    const router = useRouter();
    const handleOnCheckout = () => {
        checkout({
            lineItems: [
                {
                    price: "price_1MTOqPJkSNPL7Ztsvxm18ftd",
                    quantity: 1,
                },
            ],
        });
    };
    const handleOnProfile = () => {
        router.push("/profile");
    };
    const handleOnSignout = () => {
        router.push("/api/auth/logout");
    };
    const dot = (user: string | undefined) => {
        if (user && user.length > 15) {
            return user.slice(0, 15) + "..";
        } else {
            return user;
        }
    };
    return (
        <div
            className="absolute flex flex-col p-2 top-[68px] -right-2 bg-white 
            shadow-md w-56 h-52 rounded-xl text-black"
        >
            <div className="flex p-2">
                <UserProfile src={user.picture} size={40} />
                <div className="px-3">
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-sm text-neutral-500">
                        {dot(user.email)}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-1">
                <Button
                    onMouseDown={handleOnProfile}
                    variant="outlined"
                    color="primary"
                    sx={{
                        borderColor: "black",
                        color: "black",
                        textTransform: "none",
                        "&:hover": {
                            color: "black",
                            backgroundColor: "Gainsboro",
                            borderColor: "gray",
                        },
                    }}
                >
                    <div className="m-auto font-montserrat">Profile</div>
                </Button>
                <Button
                    onMouseDown={handleOnCheckout}
                    variant="outlined"
                    color="primary"
                    sx={{
                        textTransform: "none",
                    }}
                >
                    <div className="flex justify-center">
                        <FontAwesomeIcon
                            icon={faCrown}
                            color="orange"
                            className="m-auto mr-2 drop-shadow-sm"
                        />
                        <div className="m-auto font-montserrat">Upgrade</div>
                    </div>
                </Button>
                <Button
                    onMouseDown={handleOnSignout}
                    variant="outlined"
                    color="error"
                    sx={{
                        textTransform: "none",
                    }}
                >
                    <div className="m-auto font-montserrat">Sign out</div>
                </Button>
            </div>
        </div>
    );
};

export default UserWindow;
