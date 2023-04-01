import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { checkout } from "@/checkout";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import UserProfile from "../UserProfile";
import truncateWithDot from "@/utils/truncateWithDot";

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
    const handleOnUpgrade = () => {
        router.push("/upgrade");
    };
    const handleOnProfile = () => {
        router.push("/profile");
    };
    const handleOnSignout = () => {
        router.push("/api/auth/logout");
    };
    return (
        <div
            className="absolute flex flex-col p-2 top-[68px] -right-2 bg-white 
            shadow-md w-56 h-52 rounded-xl text-black"
        >
            <div className="flex p-2">
                <UserProfile src={user.picture} size={40} />
                <div className="px-3">
                    <div className="font-semibold">
                        {truncateWithDot(user.name, 13)}
                    </div>
                    <div className="text-sm text-neutral-500">
                        {truncateWithDot(user.email, 15)}
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
                    onMouseDown={handleOnUpgrade}
                    variant="outlined"
                    color="primary"
                    sx={{
                        textTransform: "none",
                    }}
                >
                    <button className="flex justify-center">
                        <FontAwesomeIcon
                            icon={faCrown}
                            color="orange"
                            className="m-auto mr-2 drop-shadow-sm"
                        />
                        <div className="m-auto font-montserrat">Upgrade</div>
                    </button>
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
