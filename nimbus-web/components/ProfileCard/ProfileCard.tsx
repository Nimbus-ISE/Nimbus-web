import React from "react";
import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import UserProfile from "../UserProfile";
import { UserProfile as IUserProfile } from "@auth0/nextjs-auth0/client";
import getPremiumType from "@/utils/getPremiumType";
import getPremiumExpire from "@/utils/getPremiumExpire";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import getCustomClaim from "@/utils/getCustomClaim";
import { useRouter } from "next/router";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const ProfileCard = ({ user }: { user: IUserProfile }) => {
    const router = useRouter();
    const email = getCustomClaim(user, "email");
    const created_at = getCustomClaim(user, "created_at");
    const premium_type = getPremiumType(user);
    const premium_expire = getPremiumExpire(user) as Date;
    const isLargerThanMedium = useMediaQuery("(min-width:768px)");
    return user ? (
        <Stack
            spacing={3}
            alignItems="center"
            justifyItems="center"
            direction={isLargerThanMedium ? "row" : "column"}
            sx={{
                width: "100%",
            }}
        >
            <UserProfile
                src={user.picture as string}
                size={isLargerThanMedium ? 80 : 160}
            />
            <Stack
                direction="row"
                alignItems="center"
                justifyContent={isLargerThanMedium ? "space-between" : "center"}
                flexWrap="wrap"
                width="100%"
            >
                <Stack spacing={0.5}>
                    <div className="flex gap-3 text-center">
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "montserrat",
                                color: "#333333",
                                fontWeight: "bold",
                                wordBreak: "break-word",
                                textAlign: "left",
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
                            textAlign: "left",
                        }}
                    >
                        <span className="font-semibold">Email:{"  "}</span>
                        {email}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "montserrat",
                            color: "#696969",
                            textAlign: "left",
                        }}
                    >
                        {created_at ? (
                            <>
                                <span className="font-semibold">
                                    Account Created:{"  "}
                                </span>
                                {new Date(
                                    created_at as string
                                ).toLocaleDateString()}
                            </>
                        ) : null}
                    </Typography>
                    {premium_type !== "None" ? (
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "montserrat",
                                color: "#696969",
                                textAlign: "left",
                            }}
                        >
                            <span className="font-semibold">
                                Premium Expires:
                            </span>
                            {"  "}
                            {premium_expire.toDateString()}
                        </Typography>
                    ) : null}
                </Stack>
            </Stack>
            <Button
                onMouseDown={() => router.push("/api/auth/logout")}
                variant="outlined"
                color="error"
                startIcon={<LogoutRoundedIcon />}
                sx={{
                    textTransform: "none",
                    width: "12rem",
                    marginY: "2rem",
                }}
            >
                <div className="m-auto font-montserrat">Sign out</div>
            </Button>
        </Stack>
    ) : null;
};

export default ProfileCard;
