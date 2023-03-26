import React from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import UserWindow from "./UserWindow";

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
                    className="relative"
                    onClick={() => {
                        if (userWindowVisible) setUserWindowVisible(false);
                        else setUserWindowVisible(true);
                    }}
                    onBlur={() => {
                        setUserWindowVisible(false);
                    }}
                >
                    <img
                        className="rounded-full w-[40px] h-[40px] bg-black shadow-md"
                        src={user.picture as string}
                        alt="Profile picture"
                    />
                    {userWindowVisible ? <UserWindow user={user} /> : null}
                </button>
            ) : null}
        </div>
    );
};

export default NavbarRight;
