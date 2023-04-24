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
    currentAlternativeView: number;
    arrivalAndLeaveTimes: any;
    trip_params: any;
    trip_id: string;
    isSavePlan: boolean;
    trip_name: string;
    alternative_index: number;
    chosen_alternative_index: number;
    alternative_trips: any;
    alternative_travel_time: any;
}

function reducer(state: PlanTabContextStateType, action: any) {
    switch (action.type) {
        case "SET_FULL_PLAN": {
            const intialCoordinates: any = [];
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
        case "SET_ARRIVAL_LEAVE_TIME": {
            return {
                ...state,
                arrivalAndLeaveTimes: action.payload,
            };
        }
        case "CHANGE_PLAN": {
            const changePlan = async (
                day: number,
                oldLocationIndex: number
            ) => {
                console.log(state.alternative_trips[action.payload.index]);

                const newDayPlan: any = [];
                state.alternative_trips[action.payload.index].forEach(
                    (loc: any, index: any) => {
                        newDayPlan.push(loc);
                    }
                );
                const queryObj: any = {};

                newDayPlan.forEach((node: any, index: any) => {
                    if (node.type === "locations") {
                        queryObj["day " + index.toString()] = [
                            Number(node.loc_id),
                        ];
                    }
                });

                const fetchLocationDetails = async (queryObj: any) => {
                    const response = await fetch(
                        `/api/getLocationData?loc_ids=${queryObj}`,
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(queryObj),
                        }
                    );
                    const data = await response.json();
                    return data;
                };

                const newDayPlanDetails = await fetchLocationDetails(queryObj);
                console.log(newDayPlanDetails);
                const remadeDayPlan: any = [];
                newDayPlanDetails.forEach((loc: any, index: any) => {
                    remadeDayPlan.push(...loc.location_data);
                });

                state.fullPlan[state.currentFolder].location_data =
                    remadeDayPlan;
            };
            state.travelTime[state.currentFolder] =
                state.alternative_travel_time[action.payload.index];

            changePlan(action.payload.day, action.payload.oldLocationIndex);

            return {
                ...state,
                chosen_alternative_index: action.payload.index,
                changed: !state.changed,
                map_polyline: "",
            };
        }
        case "DELETE_LOCATION": {
            state.fullPlan;
            return { ...state };
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

                openAlternatives: !state.openAlternatives,
            };

        case "TOGGLE_PLACE_DETAILS":
            if (action.payload) {
                return {
                    ...state,
                    openReview: true,
                    placeData: action.payload.place,
                };
            } else {
                return {
                    ...state,
                    openReview: false,
                };
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
        case "INCREMENT_ALTERNATIVE": {
            if (state.currentAlternativeView < 2) {
                return {
                    ...state,

                    currentAlternativeView: state.currentAlternativeView + 1,
                };
            } else {
                return state;
            }
        }
        case "DECREMENT_ALTERNATIVE": {
            if (state.currentAlternativeView > 0) {
                return {
                    ...state,
                    currentAlternativeView: state.currentAlternativeView - 1,
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
        case "SET_TRIP_PARAMS": {
            return { ...state, trip_params: action.payload };
        }
        case "SET_TRIP_ID": {
            return { ...state, trip_id: action.payload };
        }
        case "SET_IS_SAVE_PLAN": {
            return {
                ...state,
                trip_name: action.payload.trip_name,
                isSavePlan: true,
            };
        }
        case "SET_ALTERNATIVE_INDEX": {
            return { ...state, alternative_index: action.payload };
        }
        case "SET_ALTERNATIVES": {
            console.log(action.payload.locations);

            return {
                ...state,
                alternatives: action.payload.locations,
                alternative_trips: action.payload.trips,
                alternative_travel_time: action.payload.travelTime,
            };
        }
        default: {
            console.log("error");
            return state;
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
    currentAlternativeView: 0,
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
    arrivalAndLeaveTimes: [],
    trip_params: [],
    trip_id: "",
    isSavePlan: false,
    trip_name: "",
    alternative_index: 0,
    chosen_alternative_index: 0,
    alternative_trips: [],
    alternative_travel_time: 0,
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
