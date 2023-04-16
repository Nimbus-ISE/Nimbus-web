import React from "react";
import { UserProfile as UserProfileType } from "@auth0/nextjs-auth0/client";
import getPremiumExpire from "@/utils/getPremiumExpire";
import getPremiumType from "@/utils/getPremiumType";
import UserProfile from "./UserProfile";
import Slider from "./SliderList/Slider";
import PlanCard from "./Cards/PlanCard";
import { useRouter } from "next/router";

interface IProps {
    user: UserProfileType;
    recentlyViewedList: Array<unknown> | undefined;
    planList: Array<unknown>;
}

const Profile = ({ user, planList, recentlyViewedList }: IProps) => {
    const router = useRouter();
    const [date, setDate] = React.useState<string>();
    const premiumExpire = getPremiumExpire(user);
    React.useEffect(() => {
        if (user && premiumExpire) {
            setDate(premiumExpire.toString());
        }
    }, [user]);
    return user ? (
        <div className="grid grid-cols-1 min-h-screen h-full pt-24 bg-neutral-100 text-black">
            <div className="mx-auto">
                <UserProfile src={user.picture as string} size={40} />
                <h2>{user.name}</h2>
                <p className="">{user.email}</p>
                <div>Status: {getPremiumType(user) as any} </div>
                <div>Expire: {date} </div>
            </div>
            <PlanCard planList={planList} />
            <div className="my-7 w-full">
                <div
                    className="md:w-[80%] md:mx-auto text-xl font-semibold text-neutral-500
                 border-b-neutral-500 border-b-[1px] pb-1 mx-3"
                >
                    RECENTLY VIEWED
                </div>
                {recentlyViewedList ? (
                    <Slider
                        title=" "
                        locationList={recentlyViewedList}
                        shape="circle"
                        onClickCallback={(id) => router.push(`/location/${id}`)}
                    />
                ) : (
                    <div className="text-center text-neutral-400 font-semibold py-10">
                        You don't have any recently viewed locations
                    </div>
                )}
            </div>
        </div>
    ) : null;
};

export default Profile;
