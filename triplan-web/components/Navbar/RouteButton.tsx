import React from "react";
import { Button } from "@mui/material";

interface IProps {
    name: string;
    route: string;
    router: any;
}
const RouteButton = ({ name, route, router }: IProps) => {
    const onClick = () => router.push(route);
    return (
        <Button
            sx={{
                textTransform: "none",
                color: "gray",
            }}
            variant="text"
            onClick={onClick}
            className="hover:text-tricolorgreen whitespace-nowrap"
        >
            {name}
        </Button>
    );
};

export default RouteButton;
