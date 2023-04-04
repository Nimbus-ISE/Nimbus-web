import { UserProfile } from "@auth0/nextjs-auth0/client";
import { NextRouter } from "next/router";

//verifies the premium status everytime a new session (browser) is detected
const checkPremiumOnNewSession = async (
    user: UserProfile,
    router: NextRouter
) => {
    if (!sessionStorage.getItem("session-id") && user) {
        console.log("checkPremiumOnNewSession");
        let uuid = crypto.randomUUID();
        try {
            const response = await fetch(
                `/api/updatePremiumIfExpire/${user.sub}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                const data = await response.json();
                if (data.expired) {
                    alert("Your premium has expired");
                    sessionStorage.setItem("session-id", JSON.stringify(uuid));
                } else {
                    alert("Ran check: Pass");
                    sessionStorage.setItem("session-id", JSON.stringify(uuid));
                }
                const url = `/api/auth/login?prompt=${encodeURIComponent(
                    "none"
                )}`;
                router.push(url);
            } else {
                console.error("Failed to update user session");
            }
        } catch (error) {
            console.error("An error occurred win updatePremiumStatus", error);
        }
    }
};

export default checkPremiumOnNewSession;
