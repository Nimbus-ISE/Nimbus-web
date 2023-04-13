import React from "react";
import { UserProfile as UserProfileType } from "@auth0/nextjs-auth0/client";
import getPremiumExpire from "@/utils/getPremiumExpire";
import getPremiumType from "@/utils/getPremiumType";
import UserProfile from "./UserProfile";

const Profile = ({ user }: { user: UserProfileType }) => {
    const [date, setDate] = React.useState<string>();
    React.useEffect(() => {
        if (user) {
            setDate(getPremiumExpire(user).toString());
        }
    }, [user]);
    return user ? (
        <div className="grid place-items-center min-h-screen h-full pt-24 bg-neutral-100 text-black">
            <div>
                <UserProfile src={user.picture as string} size={40} />
                <h2>{user.name}</h2>
                <p className="">{user.email}</p>
                <div>Status: {getPremiumType(user) as any} </div>
                <div>Expire: {date} </div>
            </div>
        </div>
    ) : null;
};

export default Profile;
