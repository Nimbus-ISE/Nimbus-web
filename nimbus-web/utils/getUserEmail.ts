import { UserProfile } from "@auth0/nextjs-auth0/client";

const getUserEmail = (user: UserProfile | undefined) => {
    if (user) {
        return user[`https://nimbus-ise.vercel.app/email`] as string;
    }
    return undefined;
};

export default getUserEmail;
