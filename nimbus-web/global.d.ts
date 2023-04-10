declare module "react-scroll";

declare interface IForm {
    type: string;
    title: string;
}
declare interface IKeyString {
    [key: string]: any;
}
declare interface IFormData extends IKeyString {
    // TODO: add types to send to ALGO here
}
declare interface IReview {
    author: string;
    review_rating: string;
    review_text: string;
    review_date: number | Date;
    review_url?: string;
}
