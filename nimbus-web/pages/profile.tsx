import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Profile from "@/components/Profile";
import getTrendingList from "@/utils/api/getTrendingList";
import getLocationList from "@/utils/api/getLocationList";

interface IProps {
    recentlyViewedList: Array<unknown>;
    planList: Array<unknown>;
}

function profile({ recentlyViewedList, planList }: IProps) {
    const { user, isLoading } = useUser();
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : user ? (
                <Profile
                    user={user}
                    planList={planList}
                    recentlyViewedList={recentlyViewedList}
                />
            ) : null}
        </>
    );
}

export default withPageAuthRequired(profile, {
    onRedirecting: () => <Loading />,
    onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});

export async function getStaticProps() {
    const recentlyViewedList = await getTrendingList();
    const planList = await getLocationList();
    console.log(recentlyViewedList);
    return { props: { recentlyViewedList, planList } };
}
