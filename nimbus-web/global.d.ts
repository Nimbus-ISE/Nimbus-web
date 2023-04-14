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
