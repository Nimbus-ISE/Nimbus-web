import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import Navbar from "./Navbar";
import Loading from "./Loading";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = useUser();
    return !isLoading ? (
        <div>
            <Navbar user={user} isLoading={isLoading} />
            {children}
        </div>
    ) : (
        <div className="flex min-h-screen h-full bg-neutral-100">
            <Loading />
        </div>
    );
};

export default Layout;
