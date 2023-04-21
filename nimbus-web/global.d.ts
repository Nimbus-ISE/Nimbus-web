import { UserProfile } from "@auth0/nextjs-auth0/client";

declare module "react-scroll";

declare interface IForm {
    type: string;
    title: string;
    description: string;
}
declare interface IKeyString {
    [key: string]: number | string | null;
}
declare interface IFormData extends IKeyString {
    must_include: number;
    start_date: string;
    end_date: string;
    trip_pace: number;
    budget: number;
    travel_method: string;
    tags: string;
}
declare interface IReview {
    author: string;
    review_rating: string;
    review_text: string;
    review_date: number | Date;
    review_url?: string;
}

declare interface IUpgradeCard {
    backgroundColor: string;
    color: string;
    planName: string;
    priceStr: string;
    list: Array<string>;
    value: "Monthly" | "Yearly" | "None";
}

declare interface IUserProfile extends UserProfile {
    "https://nimbus-ise.vercel.app/premium_type": "None" | "Monthly" | "Yearly";
    "https://nimbus-ise.vercel.app/premium_expire": number;
}
