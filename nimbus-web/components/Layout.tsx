import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Loading from "./Loading";
import Footer from "./Footer";
import updateOnNewSession from "@/utils/updateOnNewSession";
import { useRouter } from "next/router";
import getPremiumExpire from "@/utils/getPremiumExpire";
import getPremiumType from "@/utils/getPremiumType";
import checkPremium from "@/utils/checkPremium";
import Cookies from "js-cookie";

const excludePathnameList = ["/plan", "/map"];

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = useUser();
    const router = useRouter();
    const includeLayout = () => {
        return (
            excludePathnameList.findIndex((path) =>
                router.pathname.includes(path)
            ) === -1
        );
    };
    React.useEffect(() => {
        const userID = Cookies.get("user_id");
        if (user) {
            console.log("check premium status on new session");
            if (!userID && user.sub) {
                Cookies.set("user_id", user.sub);
            }
            updateOnNewSession(user, router);
            const metadata = {
                premium_type: getPremiumType(user) as
                    | "Monthly"
                    | "Yearly"
                    | "None",
                premium_expire: getPremiumExpire(user, "number") as number,
            };
            checkPremium(metadata, user, router);
        } else {
            if (userID) Cookies.remove("user_id");
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
