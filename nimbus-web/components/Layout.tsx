import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Loading from "./Loading";
import Head from "next/head";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = useUser();
    return !isLoading ? (
        <div>
            <Navbar user={user} isLoading={isLoading} />
            <div className="flex w-full h-16 shadow-md bg-gradient-to-r from-tricolorgreen to-yellow-300" />
            {children}
        </div>
    ) : (
        <div className="flex min-h-screen h-full bg-neutral-100">
            <Loading />
        </div>
    );
};

export default Layout;
