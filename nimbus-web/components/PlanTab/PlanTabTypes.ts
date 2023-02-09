import { ReactElement } from "react";

export interface FolderFullProps {
    expand: boolean;
    children?: ReactElement;
    onClose?: any;
    currentView: number;
    openAlternatives: any;
    isBigScreen: boolean;
    openFullTab: boolean;
}
export interface FullScreenProps {
    openFullTab: any;
    closeFullTab: any;
    openAlternatives: any;
    isBigScreen: boolean;
}
export interface FolderSmallProps {
    toggleOpenReview: any;
    openAlternatives: any;
    openFullTab: any;
}
export interface SideBarProps {
    toggleOpenReview: any;
    openTab: any;
    openAlternatives: any;
    isBigScreen: boolean;
    openFullTab?: boolean;
    closeFullTab?: any;
}
export interface PlanGraphProps {
    openFullTab: boolean;
    places: Array<PlaceType>;
    dayNumber: number;
    toggleOpenReview?: any;
    clickable: boolean;
    openAlternatives: any;
}
export interface PlaceType {
    placeTitle: string;
    placeSummary: string;
    placeDescription: string;
    address: string;
    imgLink: string;
}

export interface PlaceDetailProps {
    imgLink?: string;
    placeTitle: string;
    placeDescription: string;
    numberOfStars?: number;
    address: string;
    toggleOpenReview?: any;
    isBigScreen?: boolean;
}
export interface ReviewProps {
    imgLink?: string;
    user: string;
    reviewText: string;
    numberOfStars?: number;
    isBigScreen?: boolean;
}
export interface AlternativeItemProps {
    title: string;
    description: string;
}
