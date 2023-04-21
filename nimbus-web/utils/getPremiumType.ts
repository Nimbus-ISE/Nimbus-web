import { UserProfile } from "@auth0/nextjs-auth0/client";

const getPremiumType = (user: UserProfile | undefined) => {
    if (user) {
        return user[`https://nimbus-ise.vercel.app/premium_type`] as
            | "None"
            | "Monthly"
            | "Yearly";
    }
    return undefined;
};

export default getPremiumType;
