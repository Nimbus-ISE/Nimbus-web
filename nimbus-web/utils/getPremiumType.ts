import { domain } from "@/misc";
import { UserProfile } from "@auth0/nextjs-auth0/client";

const getPremiumType = (user: UserProfile | undefined) => {
    if (user) {
        return user[`${domain}/premium_type`] as "None" | "Monthly" | "Yearly";
    }
    return undefined;
};

export default getPremiumType;
