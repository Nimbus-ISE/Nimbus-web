import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Profile() {
    const { user, isLoading } = useUser();
    React.useEffect(() => {
        if (user) {
            console.log(user);
        }
    }, [user]);
    return (
        <>
            {isLoading && <Loading />}
            {user && (
                <div>
                    <img
                        src={user.picture as string}
                        alt="Profile"
                        className="rounded-full w-12 h-12"
                    />
                    <h2>{user.name}</h2>
                    <p className="">{user.email}</p>
                </div>
            )}
        </>
    );
}

export default withPageAuthRequired(Profile, {
    onRedirecting: () => <Loading />,
    onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
