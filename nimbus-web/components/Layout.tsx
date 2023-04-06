import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Loading from "./Loading";
import Footer from "./Footer";
import checkPremiumOnNewSession from "@/utils/checkPremiumOnNewSession";
import { useRouter } from "next/router";

const excludePathnameList = ["/plan", "/map"];

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = useUser();
    const router = useRouter();
    const includeLayout = () => {
        return !excludePathnameList.includes(router.pathname);
    };
    React.useEffect(() => {
        if (user) {
            console.log("check premium status on new session");
            checkPremiumOnNewSession(user, router);
        }
    }, [user, router]);
    return !isLoading ? (
        <div>
            <Navbar user={user} isLoading={isLoading} />
            <div className="flex w-full h-16 shadow-md bg-gradient-to-r from-tricolorgreen to-yellow-300" />
            {children}
            {includeLayout() ? <Footer /> : null}
        </div>
    ) : (
        <div className="flex min-h-screen h-full bg-neutral-100">
            <Loading />
        </div>
    );
};

export default Layout;
