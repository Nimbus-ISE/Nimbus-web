import { UserProfile } from "@auth0/nextjs-auth0/client";

const getPremiumType = (user: UserProfile) => {
    if (user) {
        return user[`https://nimbus-web.vercel.app/premium_type`] as
            | "None"
            | "Monthly"
            | "Yearly";
    }
    return undefined;
};

export default getPremiumType;
