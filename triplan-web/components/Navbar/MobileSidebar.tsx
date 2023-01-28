import React, { SetStateAction } from "react";
import Image from "next/image";
import {
    Box,
    Drawer,
    List,
    ListItemIcon,
    ListItemButton,
    ListItem,
    ListItemText,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface IProps {
    list: Array<any>;
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<SetStateAction<boolean>>;
}

const MobileSidebar = ({ list, openDrawer, setOpenDrawer }: IProps) => {
    return (
        <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
        >
            <div
                className="relative bg-neutral-100 flex gap-1 items-center place-items-center 
        justify-between h-16 text-neutral-600"
            >
                <FontAwesomeIcon
                    icon={faBars}
                    color="gray"
                    onClick={() => setOpenDrawer(false)}
                    className="m-auto mx-5 drop-shadow-sm fa-xl"
                />
                <Image
                    className="w-[40px] h-auto select-none"
                    src={"http://localhost:3000" + "/images/logo.png"}
                    alt="Profile picture"
                    width={40}
                    height={30}
                />
                <div className="text-2xl font-bold mx-2">TRIPLAN</div>
            </div>
            <Box sx={{ width: 250 }}>
                <List>
                    {list.map((listItem, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary={listItem.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default MobileSidebar;
