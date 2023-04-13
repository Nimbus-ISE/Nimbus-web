import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Profile from "@/components/Profile";

function profile() {
    const { user, isLoading } = useUser();
    return (
        <>{isLoading ? <Loading /> : user ? <Profile user={user} /> : null}</>
    );
}

export default withPageAuthRequired(profile, {
    onRedirecting: () => <Loading />,
    onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
