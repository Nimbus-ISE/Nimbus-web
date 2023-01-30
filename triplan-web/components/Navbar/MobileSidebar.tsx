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
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { checkout } from "@/checkout";

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
    const router = useRouter();
    const filterName = (nameStr: string) => {
        const res = nameStr.match(/^([^@]+)/);
        return res ? res[1] : nameStr;
    };
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
                                <ListItemButton
                                    onClick={() => {
                                        router.push(listItem.route);
                                        setOpenDrawer(false);
                                    }}
                                >
                                    <ListItemIcon>
                                        {iconMapping[listItem.name]}
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography
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
                        ) : listItem === "upgrade" ? (
                            <ListItem key={index} disablePadding>
                                <ListItemButton onClick={onCheckout}>
                                    <ListItemIcon>
                                        <FontAwesomeIcon
                                            icon={faCrown}
                                            color="orange"
                                            className="drop-shadow-sm fa-lg"
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{
                                            color: "darkgoldenrod",
                                        }}
                                        disableTypography
                                        primaryTypographyProps={{
                                            fontFamily: [
                                                "Montserrat",
                                                "sans-serif",
                                            ],
                                        }}
                                        primary="Upgrade"
                                    />
                                </ListItemButton>
                            </ListItem>
                        ) : (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    {user ? (
                                        <img
                                            src={user.picture as string}
                                            className="rounded-full w-[30px] h-[30px] shadow-md"
                                            alt="Profile picture"
                                        />
                                    ) : (
                                        <Image
                                            className="rounded-full w-[30px] h-[30px] bg-black shadow-md"
                                            src="/images/guest.jpg"
                                            alt="Profile picture"
                                            width={30}
                                            height={30}
                                        />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    sx={{
                                        wordBreak: "break-word",
                                    }}
                                    primaryTypographyProps={{
                                        fontFamily: [
                                            "Montserrat",
                                            "sans-serif",
                                        ],
                                    }}
                                    primary={
                                        user
                                            ? filterName(user.name)
                                            : "Guest User"
                                    }
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
