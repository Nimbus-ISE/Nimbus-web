import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

interface IProps {
    name: string;
    route: string;
}
const RouteButton = ({ name, route }: IProps) => {
    const router = useRouter();
    const onClick = () => router.push(route);
    return (
        <Button
            sx={{
                textTransform: "none",
                color: "gray",
            }}
            variant="text"
            onClick={onClick}
            className="hover:text-tricolorgreen whitespace-nowrap rounded-lg"
        >
            <div className="font-montserrat">{name}</div>
        </Button>
    );
};

export default RouteButton;
