import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import ErrorMessage from "@/components/ErrorMessage";
import Loading from "@/components/Loading";
import Upgrade from "@/components/Upgrade";

const upgrade = () => {
    const { user } = useUser();
    return user ? <Upgrade user={user} /> : null;
};

export default withPageAuthRequired(upgrade, {
    onRedirecting: () => <Loading />,
    onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
