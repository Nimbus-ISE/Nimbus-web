import { UserProfile } from "@auth0/nextjs-auth0/client";

const getPremiumExpire = (user: UserProfile | undefined, type?: "number") => {
    if (user) {
        const numDate = user[
            `https://nimbus-web.vercel.app/premium_expire`
        ] as number;
        if (type === undefined) {
            return new Date(numDate);
        } else {
            return numDate;
        }
    }
    return undefined;
};

export default getPremiumExpire;
