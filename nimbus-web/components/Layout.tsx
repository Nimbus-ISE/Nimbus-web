import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Loading from "./Loading";
import Footer from "./Footer";
import updateOnNewSession from "@/utils/updateOnNewSession";
import { useRouter } from "next/router";
import getPremiumExpire from "@/utils/getPremiumExpire";
import getPremiumType from "@/utils/getPremiumType";
import checkPremiumExpire from "@/utils/checkPremiumExpire";
import checkPremium from "@/utils/checkPremium";

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
            updateOnNewSession(user, router);
            const metadata = {
                premium_type: getPremiumType(user),
                premium_expire: getPremiumExpire(user, "number"),
            };
            checkPremium(metadata, user, router);
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
