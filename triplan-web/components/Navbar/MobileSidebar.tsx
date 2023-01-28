import React, { SetStateAction } from "react";
import {
    Box,
    Drawer,
    List,
    ListItemIcon,
    ListItemButton,
    ListItem,
    ListItemText,
    Divider,
} from "@mui/material";
import Image from "next/image";
import MobileLeft from "./MobileLeft";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface IProps {
    list: Array<any>;
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<SetStateAction<boolean>>;
    user: any;
}

const iconMapping: { [key: string]: React.ReactNode } = {
    Home: <HomeOutlinedIcon />,
    Plan: <MapOutlinedIcon />,
    About: <InfoOutlinedIcon />,
    Login: <LoginOutlinedIcon />,
    Profile: <AccountBoxOutlinedIcon />,
    Signout: <LogoutOutlinedIcon />,
};

const MobileSidebar = ({ list, openDrawer, setOpenDrawer, user }: IProps) => {
    return (
        <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
        >
            <MobileLeft setOpenDrawer={setOpenDrawer} />
            <div className="flex w-full h-1 shadow-sm bg-gradient-to-r from-tricolorgreen to-yellow-300" />
            <Box sx={{ width: 250, paddingTop: 0 }}>
                <List>
                    {list.map((listItem, index) =>
                        typeof listItem !== "string" ? (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {iconMapping[listItem.name]}
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontFamily: [
                                                "Montserrat",
                                                "sans-serif",
                                            ],
                                        }}
                                        primary={listItem.name}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ) : listItem === "divider" ? (
                            <div className="my-4">
                                <Divider />
                            </div>
                        ) : (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <Image
                                        className="rounded-full w-[30px] h-[30px] bg-red-200"
                                        src="/images/ThorsWell.jpg"
                                        alt="Profile picture"
                                        width={30}
                                        height={30}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{
                                        fontFamily: [
                                            "Montserrat",
                                            "sans-serif",
                                        ],
                                    }}
                                    primary={user ? user.name : "Guest User"}
                                />
                            </ListItem>
                        )
                    )}
                </List>
            </Box>
        </Drawer>
    );
};

export default MobileSidebar;
