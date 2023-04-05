import { ReactElement } from "react";

export interface FolderFullProps {
    children?: ReactElement;
    onClose?: any;
}

export interface PlanGraphProps {
    places: Array<PlaceType>;
    dayNumber: number;
    clickable: boolean;
    travelTimes: any;
}

export interface PlaceType {
    loc_id: any;
    name: string;
    "opening hours": string;
    durationH: string;
    placeDescription: string;
    address: string;
    imgLink: string;
}

interface DetailProps {
    imgLink?: string;
    numberOfStars?: number;
}
export interface PlaceDetailProps extends DetailProps {
    loc_id?: string;
    placeTitle: string;
    placeDescription: string;
    address: string;
}
export interface ReviewProps extends DetailProps {
    user: string;
    reviewText: string;
}
export interface AlternativeItemProps {
    title: string;
    description: string;
}
