import { UserProfile } from "@auth0/nextjs-auth0/client";

const getPremiumExpire = (user: UserProfile) => {
    return user[`${window.location.origin}/premium_expire`] as number;
};

export default getPremiumExpire;
