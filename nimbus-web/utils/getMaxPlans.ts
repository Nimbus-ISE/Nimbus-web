import { UserProfile } from "@auth0/nextjs-auth0/client";
import getPremiumType from "./getPremiumType";

const getMaxPlans = (user: UserProfile | undefined) => {
    if (user) {
        const type = getPremiumType(user);
        return type === "Yearly" ? 10 : type === "Monthly" ? 5 : 2;
    }
    return 0;
};

export default getMaxPlans;
