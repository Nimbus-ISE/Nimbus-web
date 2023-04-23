import React from "react";
import { UserProfile as UserProfileType } from "@auth0/nextjs-auth0/client";
import Slider from "./SliderList/Slider";
import PlanCard from "./Cards/PlanCard";
import Background from "@/components/Background";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRouter } from "next/router";
import ProfileCard from "./ProfileCard/ProfileCard";
import getMaxPlans from "@/utils/getMaxPlans";
import { Divider } from "@mui/material";

interface IProps {
    user: UserProfileType;
    recentlyViewedList: Array<unknown> | undefined;
    planList: Array<unknown>;
}

const Profile = ({ user, planList, recentlyViewedList }: IProps) => {
    const router = useRouter();
    const isLargerThanMedium = useMediaQuery("(min-width:768px)");
    const maxPlans = getMaxPlans(user);
    return user ? (
        <div className="relative flex flex-col min-h-screen h-full w-full bg-neutral-100 text-black">
            <Background />
            <div
                style={{
                    marginTop: isLargerThanMedium ? "2.5%" : 0,
                    marginBottom: isLargerThanMedium ? "2.5%" : 0,
                }}
                className={`flex flex-col md:rounded-xl shadow-lg bg-neutral-100 h-full pt-12
                min-h-screen m-auto max-w-[81rem] w-full md:w-[90%] min-w-[280px] z-10 pb-5`}
            >
                <div className="md:w-[80%] w-[90%] p-5 pb-12 flex justify-left bg-neutral-100 mx-auto">
                    <ProfileCard user={user} />
                </div>
                {isLargerThanMedium ? null : (
                    <Divider className="md:w-[80%] w-[90%] mx-auto my-3" />
                )}
                <PlanCard planList={planList} maxPlans={maxPlans} />
                {isLargerThanMedium ? null : (
                    <Divider className="md:w-[80%] w-[90%] mx-auto my-3" />
                )}
                <div className="w-full">
                    <div
                        className="md:w-[80%] w-[90%] mx-auto text-xl font-semibold text-neutral-500
                    border-b-neutral-500 md:border-b-[1px] pb-1"
                    >
                        RECENTLY VIEWED
                    </div>
                    {recentlyViewedList ? (
                        <Slider
                            title=" "
                            locationList={recentlyViewedList}
                            shape="circle"
                            onClickCallback={(id) =>
                                router.push(`/location/${id}`)
                            }
                        />
                    ) : (
                        <div className="text-center text-neutral-400 font-semibold py-10">
                            You don't have any recently viewed locations
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : null;
};

export default Profile;
