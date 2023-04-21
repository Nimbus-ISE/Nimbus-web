import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Stack, Typography } from "@mui/material";
import UserProfile from "../UserProfile";
import { UserProfile as IUserProfile } from "@auth0/nextjs-auth0/client";
import getUserEmail from "@/utils/getUserEmail";
import getPremiumType from "@/utils/getPremiumType";
import getPremiumExpire from "@/utils/getPremiumExpire";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = ({ user }: { user: IUserProfile }) => {
    const email = getUserEmail(user);
    const premium_type = getPremiumType(user);
    const premium_expire = getPremiumExpire(user) as Date;
    return user ? (
        <Stack spacing={3} alignItems="center" direction="row">
            <UserProfile src={user.picture as string} size={80} />
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
            >
                <Stack>
                    <div className="flex gap-3">
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "montserrat",
                                color: "#333333",
                                fontWeight: "bold",
                            }}
                        >
                            {user.name ? user.name : email}
                        </Typography>
                        {premium_type !== "None" ? (
                            <FontAwesomeIcon
                                className="my-auto text-yellow-400 drop-shadow-sm"
                                icon={faCrown}
                            />
                        ) : null}
                    </div>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "montserrat",
                            color: "#696969",
                        }}
                    >
                        {user.name ? (
                            <>
                                <span className="font-semibold">Email: </span>
                                {email}
                            </>
                        ) : null}
                    </Typography>
                    {premium_type !== "None" ? (
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "montserrat",
                                color: "#696969",
                            }}
                        >
                            <span className="font-semibold">
                                Premium Expires:
                            </span>{" "}
                            {premium_expire.toDateString()}
                        </Typography>
                    ) : null}
                </Stack>
                {/*<Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#45D8D0",
                        borderRadius: "18px",
                        marginY: "2rem",
                    }}
                >
                    <Typography
                        variant="body2"
                        align="center"
                        sx={{
                            color: "#FFFFFF",
                            fontFamily: "montserrat",
                            fontWeight: "bold",
                        }}
                    >
                        EDIT
                    </Typography>
                    <EditIcon sx={{ fontSize: 14 }} />
                </Button>*/}
            </Stack>
        </Stack>
    ) : null;
};

export default ProfileCard;
