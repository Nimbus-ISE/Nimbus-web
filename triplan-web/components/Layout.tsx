import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Loading from "./Loading";
import Head from "next/head";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = useUser();
    return !isLoading ? (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
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
