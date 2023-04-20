import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import UserProfile from "@/components/UserProfile";
import getPremiumType from "@/utils/getPremiumType";
import getPremiumExpire from "@/utils/getPremiumExpire";

function Profile() {
    const { user, isLoading } = useUser();
    const [date, setDate] = React.useState<string>();
    React.useEffect(() => {
        if (user) {
            const expireDate = getPremiumExpire(user) as any;
            setDate(new Date(expireDate).toString());
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
                        <div>Status: {getPremiumType(user) as any} </div>
                        <div>Expire: {date} </div>
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
