import { domain } from "@/misc";
import { UserProfile } from "@auth0/nextjs-auth0/client";

const getCustomClaim = (user: UserProfile | undefined, field: string) => {
    if (user) {
        return user[`${domain}/${field}`] as string;
    }
    return undefined;
};

export default getCustomClaim;
