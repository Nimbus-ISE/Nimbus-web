import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { checkout } from "@/checkout";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import UserProfile from "../UserProfile";
import truncateWithDot from "@/utils/truncateWithDot";
import getPremiumType from "@/utils/getPremiumType";
import getCustomClaim from "@/utils/getCustomClaim";

const UserWindow = ({ user }: { user: any }) => {
    const router = useRouter();
    const premium_type = getPremiumType(user);
    const email = getCustomClaim(user, "email");
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
        sessionStorage.removeItem("session-id");
        router.push("/api/auth/logout");
    };
    return (
        <div
            className={`absolute flex flex-col p-2 top-[68px] -right-2 bg-white 
            shadow-md w-56 ${
                premium_type === "None" ? "h-52" : "h-40"
            } rounded-xl text-black`}
        >
            <div className="flex p-2">
                <UserProfile src={user.picture} size={40} />
                <div className="px-3">
                    <div className="flex gap-2 font-semibold">
                        {truncateWithDot(
                            user.name,
                            premium_type === "None" ? 13 : 10
                        )}
                        {premium_type !== "None" ? (
                            <FontAwesomeIcon
                                className="my-auto text-yellow-400 drop-shadow-sm"
                                icon={faCrown}
                            />
                        ) : null}
                    </div>
                    <div className="text-xs text-neutral-500">
                        {truncateWithDot(email, 15)}
                    </div>
                </div>
            </div>
            <div className="flex mt-1 w-full h-full">
                <div className="grid grid-cols-1 gap-2 my-auto w-full">
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
                    {premium_type === "None" ? (
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
                                <div className="m-auto font-montserrat">
                                    Upgrade
                                </div>
                            </button>
                        </Button>
                    ) : null}
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
        </div>
    );
};

export default UserWindow;
