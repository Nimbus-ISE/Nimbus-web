import { createContext, useContext, useReducer } from "react";
interface placeDataType {
    loc_id: any;
    placeTitle: string;
    address: string;
    placeDescription: string;
}
interface PlanTabContextStateType {
    isBigScreen: boolean;
    openFullTab: boolean;
    closed: boolean;
    openReview: false;
    placeData: any;
    openAlternatives: boolean;
    currentFolderView: number;
    currentFolder: number;
    isClosingFullFolder: boolean;
    fullPlan: any;
    initalCoordinates: any;
    openSavePlan: boolean;
    selectedLocationIndex: number;
    travelTime: any;
    map_polyline: any;
    alternatives: any;
    changed: boolean;
}

function reducer(state: PlanTabContextStateType, action: any) {
    switch (action.type) {
        case "SET_FULL_PLAN": {
            const intialCoordinates: any = [];
            // action.payload.forEach((day: any) => {
            //     intialCoordinates.push(day[0].coordinate);
            // });
            return {
                ...state,
                fullPlan: action.payload,
                initalCoordinates: intialCoordinates,
            };
        }
        case "SET_TRAVEL_TIME": {
            return {
                ...state,
                travelTime: action.payload,
            };
        }
        case "CHANGE_PLAN": {
            const changePlan = (day: number, oldLocationIndex: number) => {
                state.fullPlan[day].location_data[oldLocationIndex] =
                    action.payload.location;
            };
            changePlan(action.payload.day, action.payload.oldLocationIndex);
            console.log("ligma");

            return {
                ...state,

                changed: !state.changed,
            };
        }
        case "SET_SELECTED_LOCATION_INDEX": {
            return { ...state, selectedLocationIndex: action.payload };
        }
        case "SET_SCREEN_SIZE": {
            return { ...state, isBigScreen: action.payload };
        }
        case "SET_CURRENT_FOLDER": {
            return { ...state, currentFolder: action.payload };
        }

        case "OPEN_FULL_FOLDER":
            return {
                ...state,
                openFullTab: true,
                closed: false,
                openAlternatives: false,
                openReview: false,
                isClosingFullFolder: false,
            };
        case "ANIMATE_CLOSING_FOLDER":
            return {
                ...state,

                isClosingFullFolder: true,
            };
        case "CLOSE_FULL_FOLDER":
            return {
                ...state,
                openFullTab: false,
                closed: true,
                openAlternatives: false,
                openReview: false,
                isClosingFullFolder: false,
            };
        case "TOGGLE_ALTERNATIVES":
            return {
                ...state,

                openAlternatives: action.payload,
            };

        case "TOGGLE_PLACE_DETAILS":
            if (action.payload) {
                return {
                    ...state,
                    openReview: true,
                    placeData: action.payload,
                };
            } else {
                return {
                    ...state,
                    openReview: false,
                };
            }
        case "TOGGLE_ALTERNATIVES": {
            return { ...state, openAlternatives: !state.openAlternatives };
        }
        case "INCREMENT_FOLDER": {
            if (state.currentFolderView < 2) {
                return {
                    ...state,
                    currentFolderView: state.currentFolderView + 1,
                    currentFolder: state.currentFolder + 1,
                };
            } else {
                return state;
            }
        }
        case "DECREMENT_FOLDER": {
            if (state.currentFolderView > 0) {
                return {
                    ...state,
                    currentFolderView: state.currentFolderView - 1,
                    currentFolder: state.currentFolder - 1,
                };
            } else {
                return state;
            }
        }
        case "TOGGLE_SAVE_PLAN": {
            return { ...state, openSavePlan: !state.openSavePlan };
        }
        case "SAVE_PLAN": {
            return { ...state, openSavePlan: false };
        }
        case "SET_ROUTE": {
            return { ...state, map_polyline: action.payload };
        }
        default: {
            console.log("error");
            return state;
            break;
        }
    }
}

const initialState: PlanTabContextStateType = {
    isBigScreen: true,
    openFullTab: false,
    closed: true,
    openReview: false,
    placeData: {} as placeDataType,
    openAlternatives: false,
    currentFolderView: 0,
    isClosingFullFolder: false,
    fullPlan: [],
    initalCoordinates: [{}],
    currentFolder: 0,
    openSavePlan: false,
    selectedLocationIndex: 0,
    travelTime: [],
    map_polyline: [],
    alternatives: [
        {
            loc_id: 44,
            loc_name: "Joke Sam Yan",
            price_level: 1,
            description: null,
            lat: 13.7346539,
            lng: 100.5261501,
            province: "Krung Thep Maha Nakhon ",
            rating: "4.3",
            est_time_stay: 60,
            view_count: 0,
            partner: false,
            address: "241 245 ซอย จุฬาฯ 11 Wang Mai, Pathum Wan, Bangkok 10330",
            url: "https://media.timeout.com/images/105671563/750/422/image.jpg",
        },
        {
            loc_id: 244,
            loc_name: "Joke Sam Yan 2: Jokin' Time",
            price_level: 1,
            description: null,
            lat: 13.7346539,
            lng: 100.5261501,
            province: "Krung Thep Maha Nakhon ",
            rating: "4.3",
            est_time_stay: 60,
            view_count: 0,
            partner: false,
            address: "241 245 ซอย จุฬาฯ 11 Wang Mai, Pathum Wan, Bangkok 10330",
            url: "https://media.timeout.com/images/105671563/750/422/image.jpg",
        },
        {
            loc_id: 344,
            loc_name: "Joke Sam Yan 3: The Jokenning",
            price_level: 1,
            description: null,
            lat: 13.7346539,
            lng: 100.5261501,
            province: "Krung Thep Maha Nakhon ",
            rating: "4.3",
            est_time_stay: 60,
            view_count: 0,
            partner: false,
            address: "241 245 ซอย จุฬาฯ 11 Wang Mai, Pathum Wan, Bangkok 10330",
            url: "https://media.timeout.com/images/105671563/750/422/image.jpg",
        },
    ],
    changed: false,
};

const PlanTabContext = createContext(
    null as unknown as PlanTabContextStateType
);
const PlanTabDisptachContext = createContext(null);

export function getPlanTabState() {
    return useContext(PlanTabContext);
}
export function getPlanTabDispatch() {
    return useContext(PlanTabDisptachContext);
}
export function PlanTabProvider({ children }: any) {
    const [state, dispatch]: [any, any] = useReducer(
        reducer as any,
        initialState
    );
    return (
        <PlanTabContext.Provider value={state}>
            <PlanTabDisptachContext.Provider value={dispatch}>
                {children}
            </PlanTabDisptachContext.Provider>
        </PlanTabContext.Provider>
    );
}
