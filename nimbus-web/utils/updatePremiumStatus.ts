import { UserProfile } from "@auth0/nextjs-auth0/client";

//verifies the premium status everytime a new session (browser) is detected
const updatePremiumStatus = async (user: UserProfile) => {
    if (!sessionStorage.getItem("session-id") && user) {
        let uuid = crypto.randomUUID();
        try {
            const response = await fetch(
                `/api/updatePremiumStatus/${user.sub}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                await response.json();
                sessionStorage.setItem("session-id", JSON.stringify(uuid));
            } else {
                console.error("Failed to update user session");
            }
        } catch (error) {
            console.error(
                "An error occurred while updating the user session:",
                error
            );
        }
    }
};

export default updatePremiumStatus;
