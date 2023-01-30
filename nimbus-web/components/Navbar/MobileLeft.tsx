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
            className="relative flex gap-1 items-center place-items-center 
            justify-evenly h-16 text-neutral-600"
        >
            <IconButton className="aspect-square">
                <FontAwesomeIcon
                    icon={faBars}
                    color="gray"
                    onClick={() => setOpenDrawer((prev) => !prev)}
                    className="aspect-square drop-shadow-sm fa-lg"
                />
            </IconButton>
            <div className="">
                <NavbarLogo />
            </div>
        </div>
    );
};

export default MobileLeft;
