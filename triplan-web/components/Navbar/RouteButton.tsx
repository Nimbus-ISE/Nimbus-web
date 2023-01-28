import React from "react";

interface IProps {
    name: string;
    route: string;
    router: any;
}
const RouteButton = ({ name, route, router }: IProps) => {
    const onClick = () => router.push(route);
    return (
        <button
            onClick={onClick}
            className="hover:text-tricolorgreen whitespace-nowrap"
        >
            {name}
        </button>
    );
};

export default RouteButton;
