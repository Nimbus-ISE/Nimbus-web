import React from "react";
import { useRouter } from "next/router";
import CycloneIcon from "@mui/icons-material/Cyclone";
import { FilterDramaRounded } from "@mui/icons-material";

const NavbarLogo = () => {
    const router = useRouter();
    return (
        <button
            onClick={() => router.push("/")}
            className="flex select-none m-auto"
        >
            <FilterDramaRounded className="text-tricolorgreen my-auto drop-shadow-sm" />
            <div className="text-xl font-bold mx-1">NIMBUS</div>
        </button>
    );
};

export default NavbarLogo;
