import { UserProfile } from "@auth0/nextjs-auth0/client";
import { NextRouter } from "next/router";
import checkPremiumExpire from "./checkPremiumExpire";
import getPremiumExpire from "./getPremiumExpire";
import getPremiumType from "./getPremiumType";

//verifies the premium status everytime a new session (browser) is detected
const updateOnNewSession = async (user: UserProfile, router: NextRouter) => {
    if (!sessionStorage.getItem("session-id") && user) {
        console.log("updateOnNewSession");
        let uuid = crypto.randomUUID();
        const url = `/api/auth/login?prompt=${encodeURIComponent("none")}`;
        router.push(url);
        sessionStorage.setItem("session-id", JSON.stringify(uuid));
    }
};

export default updateOnNewSession;
