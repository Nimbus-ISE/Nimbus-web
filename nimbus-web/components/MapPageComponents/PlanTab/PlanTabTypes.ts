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
    arrivalAndLeaveTimes: any;
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

export interface Location {
    type: "locations";
    loc_id: number;
    arrival_time: string;
    leave_time: string;
}

export interface TravelDuration {
    type: "travel_dur";
    travel_dur: number;
    travel_type: "walk";
}

export type LocationOrTravelDuration = Location | TravelDuration;

export type Schedule = LocationOrTravelDuration[];

export type Plan = [Schedule];
