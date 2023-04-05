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
}

function reducer(state: PlanTabContextStateType, action: any) {
    switch (action.type) {
        case "SET_FULL_PLAN": {
            const intialCoordinates: any = [];
            action.payload.forEach((day: any) => {
                intialCoordinates.push(day[0].coordinate);
            });
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
                state.fullPlan[day][oldLocationIndex] = {
                    coordinate: [13.7346539, 100.5261501],
                    type: "tourist spot",
                    "opening hours": [8, 13],
                    duration: 72,
                    durationH: 1.2,
                    name: "Joke Sam Yan",
                    loc_id: "44",
                    leaveTime: 10.22273878515078,
                };
            };
            changePlan(action.payload.day, action.payload.oldLocationIndex);
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
        default: {
            console.log("error");
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
