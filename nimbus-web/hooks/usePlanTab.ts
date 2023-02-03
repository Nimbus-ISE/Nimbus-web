import { testData } from "@/test_data/testData";
import { useState } from "react";

const usePlanTab = () => {
    const [currentView, setCurrentView] = useState(0);
    const incrementView = () => {
        if (currentView + 3 < testData.length) setCurrentView(currentView + 1);
        console.log(currentView);
    };
    const decrementView = () => {
        if (currentView > 0) setCurrentView(currentView - 1);
        console.log(currentView);
    };
    return { currentView, incrementView, decrementView };
};
export default usePlanTab;
