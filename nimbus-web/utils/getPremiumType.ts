import { UserProfile } from "@auth0/nextjs-auth0/client";

const getPremiumType = (user: UserProfile) => {
    return user[`${window.location.origin}/premium_type`] as string;
};

export default getPremiumType;
