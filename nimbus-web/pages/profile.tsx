import React from "react";
import {
    UserProfile,
    useUser,
    withPageAuthRequired,
} from "@auth0/nextjs-auth0/client";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Profile from "@/components/Profile";
import getRecentlyViewedList from "@/utils/api/getRecentlyViewedList";
import { GetServerSidePropsContext } from "next";
import getRecentlyViewed from "@/utils/getRecentlyViewed";
import getSavedPlan from "@/utils/api/getSavedPlan";
import { customClaims } from "@/misc";

interface IProps {
    recentlyViewedList: Array<unknown> | undefined;
    planList: Array<{
        user: UserProfile;
        recentlyViewedList: Array<unknown> | undefined;
        planList: Array<unknown>;
    }>;
}

function profile({ recentlyViewedList, planList }: IProps) {
    // const { user, isLoading } = useUser();
    const isLoading = false;
    const user = {
        ...customClaims,
        family_name: "P",
        given_name: "Nattakit",
        locale: "en",
        name: "Nattakit P",
        nickname: "search35453",
        picture:
            "https://lh3.googleusercontent.com/a/AEdFTp5a3gVM3PRFVmKChA74uW-FS210zmx4Lf7DAWwl4w=s96-c",
        updated_at: "2023-01-24T01:01:39.063Z",
    };
    console.log(recentlyViewedList, planList);
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

// export default withPageAuthRequired(profile, {
//     onRedirecting: () => <Loading />,
//     onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
// });

export default profile;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = context.req.cookies;
    const rv = getRecentlyViewed(cookies.rv);
    console.log("rv", rv);
    let recentlyViewedList;
    if (rv) {
        recentlyViewedList = await getRecentlyViewedList(rv.reverse());
    }
    console.log("RV", rv);
    const planList = await getSavedPlan(cookies.user_id);
    console.log("PLANLIST", planList);
    return { props: { recentlyViewedList, planList } };
}
