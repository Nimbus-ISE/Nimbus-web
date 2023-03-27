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
            {user && (
                <div className="grid place-items-center min-h-screen h-full pt-24 bg-neutral-100 text-black">
                    <div>
                        <UserProfile src={user.picture as string} size={40} />
                        <h2>{user.name}</h2>
                        <p className="">{user.email}</p>
                    </div>
                </div>
            )}
        </>
    );
}

//export default Profile;

/*export async function getStaticProps(context: any) {
    const user = {
        family_name: "P",
        given_name: "Nattakit",
        locale: "en",
        name: "Nattakit P",
        nickname: "search35453",
        picture:
            "https://lh3.googleusercontent.com/a/AEdFTp5a3gVM3PRFVmKChA74uW-FS210zmx4Lf7DAWwl4w=s96-c",
        updated_at: "2023-01-24T01:01:39.063Z",
    };
    return {
        props: {
            user,
        }, // will be passed to the page component as props
    };
}*/

export default withPageAuthRequired(Profile, {
    onRedirecting: () => <Loading />,
    onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
