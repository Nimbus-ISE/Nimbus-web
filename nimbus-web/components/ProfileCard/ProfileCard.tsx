import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Stack, Typography } from "@mui/material";
import UserProfile from "../UserProfile";


interface ProfileCardProps {
    data: { image: string; name: string; createAt: string };
}

const ProfileCard = ({ data }: ProfileCardProps) => {
    return (
        <Stack spacing={3} alignItems="center" direction="row">
            <UserProfile src={data.image} size={80} />
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
            >
                <Stack>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {data.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#A6A6A6",
                        }}
                    >
                        ACCOUNT CREATED {data.createAt}
                    </Typography>
                </Stack>
                <Button
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
                            fontWeight: "bold",
                        }}
                    >
                        EDIT
                    </Typography>
                    <EditIcon sx={{ fontSize: 14 }} />
                </Button>
            </Stack>
        </Stack>
    );
};

export default ProfileCard;
