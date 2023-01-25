import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

interface INavbarProps {
    user: unknown;
    isLoading: boolean;
}

const Navbar = ({ user, isLoading }: INavbarProps) => {
    const router = useRouter();
    const onLogin = () => {
        router.push("/api/auth/login");
    };
    const onCheckProfile = () => {
        router.push("/profile");
    };
    const onLogout = () => {
        router.push("/api/auth/logout");
    };
    return (
        <div className="fixed h-24 bg-slate-200 shadow-lg w-full flex gap-1 items-center place-items-center justify-between top-0 left-0">
            <div className="ml-10 flex gap-2">
                <button
                    className=""
                    /*onClick={() => {
                        checkout({
                            lineItems: [
                                {
                                    price: "price_1MTOqPJkSNPL7Ztsvxm18ftd",
                                    quantity: 1,
                                },
                            ],
                        });
                    }}*/
                >
                    BECOME A PREMIUM USER!!!
                </button>
                <button className="">Make a Plan</button>
            </div>
            <div className="mr-10 flex gap-2">
                {!isLoading && !user ? (
                    <button onClick={onLogin} className="w-32 flex">
                        Log in
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            height={"20px"}
                            className="ml-2"
                        >
                            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                        </svg>
                    </button>
                ) : !isLoading ? (
                    <div className="flex">
                        <button onClick={onCheckProfile}>Check Profile</button>
                        <button onClick={onLogout} className="w-32 flex mx-2">
                            Log out
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                height={"20px"}
                                className="ml-2"
                            >
                                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                            </svg>
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
export default Navbar;
