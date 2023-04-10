import { UserProfile } from "@auth0/nextjs-auth0/client";
import { NextRouter } from "next/router";

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
