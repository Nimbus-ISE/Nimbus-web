import { UserProfile } from "@auth0/nextjs-auth0/client";

const getPremiumExpire = (user: UserProfile, type?: "number") => {
    const numDate = user[`${window.location.origin}/premium_expire`] as number;
    if (type === undefined) {
        return new Date(numDate);
    } else {
        return numDate;
    }
};

export default getPremiumExpire;
