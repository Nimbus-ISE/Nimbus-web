import React from "react";
import { UserProfile as UserProfileType } from "@auth0/nextjs-auth0/client";
import Slider from "./SliderList/Slider";
import PlanCard from "./Cards/PlanCard";
import Background from "@/components/Background";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRouter } from "next/router";
import ProfileCard from "./ProfileCard/ProfileCard";
import getMaxPlans from "@/utils/getMaxPlans";
import { Button, Divider } from "@mui/material";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import ConfirmModal from "./ConfirmModal";

interface IProps {
    user: UserProfileType;
    recentlyViewedList: Array<unknown> | undefined;
    planList: Array<unknown>;
}

const Profile = ({ user, planList, recentlyViewedList }: IProps) => {
    const router = useRouter();
    const isLargerThanMedium = useMediaQuery("(min-width:768px)");
    const maxPlans = getMaxPlans(user);
    const [confirmActive, setIsConfirmActive] = React.useState<boolean>(false);
    const handleDeleteAccount = async () => {
        const response = await fetch(`/api/deleteUser/${user.sub}`);
        if (response.ok) {
            alert("Account successfully deleted!");
            router.push("/api/auth/logout");
        } else {
            alert("Error deleting account");
        }
    };
    return user ? (
        <div className="relative flex flex-col min-h-screen h-full w-full bg-neutral-100 text-neutral-800">
            <Background />
            <ConfirmModal
                confirmActive={confirmActive}
                setIsConfirmActive={setIsConfirmActive}
                onAcceptCallback={handleDeleteAccount}
                onDeclineCallback={() => {}}
                header="Delete my account"
                sub="Deleting your account is an irreversible action and
                will permanently delete all of your data. Please
                proceed with caution."
            />
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
                {isLargerThanMedium ? (
                    <div className="py-3" />
                ) : (
                    <div className="md:w-[80%] w-[90%] mx-auto py-3">
                        <Divider />
                    </div>
                )}
                <PlanCard planList={planList} maxPlans={maxPlans} />
                {isLargerThanMedium ? (
                    <div className="py-3" />
                ) : (
                    <div className="md:w-[80%] w-[90%] mx-auto py-3">
                        <Divider />
                    </div>
                )}
                <div className="w-full">
                    <div
                        className="md:w-[80%] w-[90%] mx-auto text-xl font-semibold text-neutral-500
                    border-b-neutral-500 md:border-b-[1px] pb-1"
                    >
                        RECENTLY VIEWED
                    </div>
                    {recentlyViewedList && recentlyViewedList.length !== 0 ? (
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
                <div className="md:w-[80%] w-[90%] mx-auto py-5">
                    <Divider />
                </div>
                <div className="md:w-[80%] w-[90%] mx-auto bg-red-50 border border-red-500 rounded-xl text-red-700 px-4 py-5 my-5">
                    <div className="text-xl font-bold">DANGER ZONE:</div>

                    <div className="flex flex-col gap-5 md:flex-row justify-between p-3 w-full">
                        <div className="text-neutral-700 text-sm my-auto md:pb-0 pb-3 max-w-[30rem]">
                            Deleting your account is an irreversible action and
                            will permanently delete all of your data. Please
                            proceed with caution.
                        </div>
                        <Button
                            onMouseDown={() => setIsConfirmActive(true)}
                            variant="outlined"
                            color="error"
                            startIcon={<WarningRoundedIcon />}
                            sx={{
                                textTransform: "none",
                                width: "200px",
                                marginY: "auto",
                            }}
                        >
                            <div className="m-auto font-montserrat leading-5">
                                Delete Account
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Profile;
