import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

interface ProfileCardProps {
    image: string;
    name: string;
    shape: "rectangle" | "circle";
}

const ProfileCard = ({ image, name, shape }: ProfileCardProps) => {
    return (
        <Stack spacing={1} justifyContent="center" alignItems="center">
            {/* <Avatar
                src={image}
                alt={name}
                sx={{ width: "30%", height: "50%" }}
            /> */}
            <Button
                sx={{ borderRadius: "50%" }}
                startIcon={
                    <img
                        src="/images/bg.webp"
                        alt="Profile of location"
                        // borderRadius="50%"
                        // sx={{ borderRadius: "50%" }}
                    />
                }
            ></Button>
            <Typography>{name}</Typography>
        </Stack>
        // <div
        //     onClick={() => {
        //         console.log("Hello");
        //     }}
        //     className="flex select-none my-auto"
        // >
        //     <Image
        //         className="w-[40px] h-[30px]"
        //         src={image}
        //         alt={name}
        //         width={40}
        //         height={30}
        //     />
        //     <div className="text-2xl font-bold mx-2">NIMBUS</div>
        // </div>
    );
};

export default ProfileCard;
