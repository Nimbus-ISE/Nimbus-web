import React from "react";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import getPremiumType from "@/utils/getPremiumType";
import UpgradeCard from "@/components/UpgradeCard";

const upgradeData = [
    {
        backgroundColor: "#ffffff",
        color: "#333333",
        planName: "STARTER",
        priceStr: "FREE",
        list: [
            "1 Plan Save Slot",
            "Plan up to 3 days per trip",
            "View other users profile",
        ],
        value: "None",
    },
    {
        backgroundColor: "#00c2b2",
        color: "#ffffff",
        planName: "MONTHLY",
        priceStr: "150฿",
        list: [
            "5 Plans Save Slot",
            "Plan up to 5 days per trip",
            "View other users save plan",
        ],
        value: "Monthly",
    },
    {
        backgroundColor: "#00c4cc",
        color: "#ffffff",
        planName: "YEARLY",
        priceStr: "100฿",
        list: [
            "10 Plans Save Slot",
            "Plan up to 7 days per trip",
            "All benefits of monthly plan",
        ],
        value: "Yearly",
    },
];

const Upgrade = ({ user }: { user: UserProfile }) => {
    const router = useRouter();
    const handleUpgrade = async (upgradeType: string) => {
        if (user && getPremiumType(user) === "None") {
            try {
                const response = await fetch(
                    `/api/upgradeUser/${user.sub}/${upgradeType}`
                );
                if (response.ok) {
                    alert("Upgrade complete!");
                    const url = `/api/auth/login?prompt=${encodeURIComponent(
                        "none"
                    )}&redirect=${encodeURIComponent("true")}`;
                    router.push(url);
                } else {
                    alert("Unknown error occured");
                }
            } catch (e) {
                console.log(e);
                alert(`Error occured ${e}`);
            }
        } else {
            console.log("user is already premium", user);
        }
    };
    return (
        <div className="relative grid place-items-center min-h-screen h-full bg-neutral-100 text-black">
            <img
                src="/images/home1.webp"
                className="absolute object-cover object-bottom top-0 bottom-0 left-0 right-0 w-full h-full opacity-30 aspect-video"
            />
            <div className="flex flex-col justify-center flex-wrap md:flex-row gap-5 py-12 px-1">
                {upgradeData.map((upgradeItem) => {
                    const upgradeProps = {
                        ...upgradeItem,
                        onClickCallback: (type: "Monthly" | "Yearly") => {
                            console.log("trigger upgrade type", type);
                            handleUpgrade(type);
                        },
                    } as any;
                    return <UpgradeCard {...upgradeProps} />;
                })}
            </div>
        </div>
    );
};

export default Upgrade;
