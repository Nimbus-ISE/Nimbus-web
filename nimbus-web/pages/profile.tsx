import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Profile from "@/components/Profile";
import getLocationList from "@/utils/api/getLocationList";
import getRecentlyViewedList from "@/utils/api/getRecentlyViewedList";
import { GetServerSidePropsContext } from "next";
import getRecentlyViewed from "@/utils/getRecentlyViewed";

interface IProps {
    recentlyViewedList: Array<unknown> | undefined;
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = context.req.cookies;
    const rv = getRecentlyViewed(cookies.rv);
    console.log("rv", rv);
    let recentlyViewedList;
    if (rv) {
        recentlyViewedList = await getRecentlyViewedList(rv.reverse());
    }
    const planList = await getLocationList();
    console.log(recentlyViewedList);
    return { props: { recentlyViewedList, planList } };
}
