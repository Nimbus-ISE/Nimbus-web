import { NextRouter } from "next/router";
import checkPremiumExpire from "./checkPremiumExpire";
import { UserProfile } from "@auth0/nextjs-auth0/client";

const checkPremium = async (
    metadata: {
        premium_type: string;
        premium_expire: Date | number;
    },
    user: UserProfile,
    router: NextRouter
) => {
    if (checkPremiumExpire(metadata)) {
        try {
            const response = await fetch(`/api/expirePremium/${user.sub}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                alert("Your premium has expired");
                if (sessionStorage.getItem("session-id"))
                    sessionStorage.removeItem("session-id");
            }
        } catch (error) {
            console.error("An error occurred with expirePremium", error);
        }
    }
};

export default checkPremium;
