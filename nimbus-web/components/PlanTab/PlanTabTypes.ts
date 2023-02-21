import { ReactElement } from "react";
interface FolderProps {
    openFullTab?: any;
    openAlternatives: any;
    isBigScreen?: boolean;
    toggleOpenReview?: any;
}

export interface FolderFullProps extends FolderProps {
    expand: boolean;
    children?: ReactElement;
    onClose?: any;
    currentView: number;
}
export interface FullScreenProps extends FolderProps {
    closeFullTab: any;
}
export interface FolderSmallProps extends FolderProps {}
export interface SideBarProps extends FolderProps {
    openTab: any;
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
export interface AlternativeCardProps {
    isBigScreen: boolean;
}
export interface PlaceType {
    placeTitle: string;
    placeSummary: string;
    placeDescription: string;
    address: string;
    imgLink: string;
}

interface DetailProps {
    imgLink?: string;
    numberOfStars?: number;
    isBigScreen?: boolean;
}
export interface PlaceDetailProps extends DetailProps {
    placeTitle: string;
    placeDescription: string;
    address: string;
    toggleOpenReview?: any;
}
export interface ReviewProps extends DetailProps {
    user: string;
    reviewText: string;
}
export interface AlternativeItemProps {
    title: string;
    isBigScreen: boolean;
    description: string;
}
