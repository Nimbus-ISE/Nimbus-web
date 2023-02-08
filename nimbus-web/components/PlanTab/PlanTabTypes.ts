import { ReactElement } from "react";

export interface FolderFullProps {
    expand: boolean;
    children?: ReactElement;
    onClose?: any;
    currentView: number;
    openAlternatives: any;
    openFullTab: boolean;
}
export interface FolderSmallProps {
    toggleOpenReview: any;
    openAlternatives: any;
}
export interface SideBarProps {
    toggleOpenReview: any;
    openTab: any;
    openAlternatives: any;
    isBigScreen: boolean;
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
}

export interface AlternativeItemProps {
    title: string;
    description: string;
}
