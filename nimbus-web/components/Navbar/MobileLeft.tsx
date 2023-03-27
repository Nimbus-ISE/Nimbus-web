import React, { SetStateAction } from "react";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarLogo from "./NavbarLogo";

interface IProps {
    setOpenDrawer: React.Dispatch<SetStateAction<boolean>>;
}

const MobileLeft = ({ setOpenDrawer }: IProps) => {
    return (
        <div
            className="relative flex gap-1 justify-left
            h-16 text-neutral-600"
        >
            <IconButton
                onClick={() => setOpenDrawer((prev) => !prev)}
                sx={{
                    width: "50px",
                    height: "50px",
                    marginY: "auto",
                    marginLeft: "7px",
                    zIndex: 10,
                }}
            >
                <FontAwesomeIcon
                    icon={faBars}
                    color="gray"
                    className="aspect-square drop-shadow-sm fa-lg"
                />
            </IconButton>
            <div className="absolute flex top-0 bottom-0 left-0 right-0 m-auto">
                <NavbarLogo />
            </div>
        </div>
    );
};

export default MobileLeft;
