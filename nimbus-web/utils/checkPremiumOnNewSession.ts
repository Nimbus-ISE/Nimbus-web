import { UserProfile } from "@auth0/nextjs-auth0/client";
import { NextRouter } from "next/router";
import checkPremiumExpire from "./checkPremiumExpire";
import getPremiumExpire from "./getPremiumExpire";
import getPremiumType from "./getPremiumType";

//verifies the premium status everytime a new session (browser) is detected
const checkPremiumOnNewSession = async (
    user: UserProfile,
    router: NextRouter
) => {
    if (!sessionStorage.getItem("session-id") && user) {
        console.log("checkPremiumOnNewSession");
        let uuid = crypto.randomUUID();
        const metadata = {
            premium_type: getPremiumType(user),
            premium_expire: getPremiumExpire(user, "number"),
        };
        if (checkPremiumExpire(metadata)) {
            try {
                const response = await fetch(`/api/expirePremium/${user.sub}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const url = `/api/auth/login?prompt=${encodeURIComponent(
                        "none"
                    )}`;
                    router.push(url);
                    alert("Your premium has expired");
                }
            } catch (error) {
                console.error("An error occurred win expirePremium", error);
            }
        }
        sessionStorage.setItem("session-id", JSON.stringify(uuid));
    }
};

export default checkPremiumOnNewSession;
