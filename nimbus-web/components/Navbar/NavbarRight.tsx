import React from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import UserWindow from "./UserWindow";
import UserProfile from "../UserProfile";

interface IProps {
    isLoading: boolean;
    user: any;
}

const NavbarRight = ({ isLoading, user }: IProps) => {
    const router = useRouter();
    const handleOnLogIn = () => {
        router.push("/api/auth/login");
    };
    const [userWindowVisible, setUserWindowVisible] =
        React.useState<boolean>(false);
    return (
        <div className="grid grid-flow-col gap-1 px-5 text-md">
            <Button
                onClick={() => {
                    router.push("/register");
                }}
                variant="outlined"
                color="primary"
                sx={{
                    height: "2rem",
                    borderRadius: "999px",
                    borderColor: "black",
                    color: "black",
                    marginY: "auto",
                    marginX: "0.75rem",
                    textTransform: "none",
                    "&:hover": {
                        color: "black",
                        backgroundColor: "Gainsboro",
                        borderColor: "gray",
                    },
                }}
            >
                <div className="m-auto text-xs font-montserrat whitespace-nowrap">
                    + Register Place
                </div>
            </Button>
            {!isLoading && !user ? (
                <Button
                    onClick={handleOnLogIn}
                    variant="text"
                    sx={{
                        textTransform: "none",
                        color: "gray",
                    }}
                    className="hover:text-tricolorgreen whitespace-nowrap"
                >
                    <div className="m-auto font-montserrat">Login</div>
                </Button>
            ) : !isLoading ? (
                <button
                    className="relative group w-[46px] h-[46px]"
                    onClick={() => {
                        if (userWindowVisible) setUserWindowVisible(false);
                        else setUserWindowVisible(true);
                    }}
                    onBlur={() => {
                        setUserWindowVisible(false);
                    }}
                >
                    <UserProfile
                        src={user.picture}
                        className="absolute top-0 bottom-0 left-0 right-0 m-auto border-teal-400
                        group-hover:border-2 group-hover:w-[44px] group-hover:h-[44px] w-[40px] h-[40px]"
                    />
                    {userWindowVisible ? <UserWindow user={user} /> : null}
                </button>
            ) : null}
        </div>
    );
};

export default NavbarRight;
