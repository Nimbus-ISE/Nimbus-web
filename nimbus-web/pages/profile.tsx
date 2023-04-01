import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import UserProfile from "@/components/UserProfile";

function Profile() {
    const { user, isLoading } = useUser();
    //const isLoading = false;
    React.useEffect(() => {
        if (user) {
            console.log(user);
        }
    }, [user]);
    return (
        <>
            {isLoading && <Loading />}
            {user ? (
                <div className="grid place-items-center min-h-screen h-full pt-24 bg-neutral-100 text-black">
                    <div>
                        <UserProfile src={user.picture as string} size={40} />
                        <h2>{user.name}</h2>
                        <p className="">{user.email}</p>
                        <div>Status: {user?.premium_type as any} </div>
                        <div>Expire: {user?.premium_expire as any} </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default withPageAuthRequired(Profile, {
    onRedirecting: () => <Loading />,
    onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
