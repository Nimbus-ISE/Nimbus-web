import { UserProfile } from "@auth0/nextjs-auth0/client";
import { NextRouter } from "next/router";
import Cookies from "js-cookie";

const updateOnNewSession = async (user: UserProfile, router: NextRouter) => {
    const userID = Cookies.get("user_id");
    if (userID && !sessionStorage.getItem("session-id") && user) {
        console.log("updateOnNewSession");
        let uuid = crypto.randomUUID();
        const url = `/api/auth/login?prompt=${encodeURIComponent("none")}`;
        router.push(url);
        sessionStorage.setItem("session-id", JSON.stringify(uuid));
    } else if (!userID && !sessionStorage.getItem("session-id") && user) {
        let uuid = crypto.randomUUID();
        sessionStorage.setItem("session-id", JSON.stringify(uuid));
    }
};

export default updateOnNewSession;
