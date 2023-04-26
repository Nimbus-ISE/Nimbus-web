import fetchLocationDetails from "@/utils/api/fetchLocationDetails";
import { createContext, useContext, useReducer } from "react";
interface placeDataType {
    loc_id: any;
    placeTitle: string;
    address: string;
    placeDescription: string;
}
interface PlanTabContextKeys {
    [key: string]: any;
}
interface PlanTabContextStateType extends PlanTabContextKeys {
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
        case "SET": {
            if (action.payload) {
                state[action.payload.property] = action.payload.value;
            }

            return { ...state };
        }
        case "MULTI_SET": {
            if (action.payload) {
                for (
                    let index = 0;
                    index < action.payload.property.length;
                    index++
                ) {
                    state[action.payload.property[index]] =
                        action.payload.value[index];
                }
            }

            return { ...state };
        }
        case "TOGGLE": {
            if (action.payload) {
                state[action.payload.property] = !action.payload.value;
            }
            return { ...state };
        }

        case "CHANGE_PLAN": {
            const changePlan = async () => {
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

                const newDayPlanDetails = await fetchLocationDetails(queryObj);

                const remadeDayPlan: any = [];
                newDayPlanDetails.forEach((loc: any, index: any) => {
                    remadeDayPlan.push(...loc.location_data);
                });

                state.fullPlan[state.currentFolder].location_data =
                    remadeDayPlan;
            };

            state.travelTime[state.currentFolder] =
                state.alternative_travel_time[action.payload.index];

            changePlan();

            return {
                ...state,
                chosen_alternative_index: action.payload.index,
                changed: !state.changed,
                map_polyline: "",
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

        case "SET_ROUTE": {
            return { ...state, map_polyline: action.payload };
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
