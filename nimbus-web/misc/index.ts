export const domain = "https://nimbus-ise.vercel.app";

export const customClaims = {} as { [key: string]: any };
customClaims[`${domain}/premium_type`] = "None";
customClaims[`${domain}/premium_expire`] = 1682047709922;
customClaims[`${domain}/email`] = "hello123@gmail.com";
customClaims[`${domain}/created_at`] = "2023-04-04T16:41:54.389Z";

export const tags = [
    "Restaurant",
    "Hidden Gem",
    "Mall",
    "Religion",
    "Nature",
    "Temple",
    "Shopping",
    "Must See Attraction",
    "Beach",
    "Local Culture",
    "Luxury",
    "Historical Place",
    "Outdoor",
    "Wellness & Spa",
    "Zoo",
    "Market",
    "Sports",
    "Arts",
    "Theater",
    "Museum",
    "Nightlife",
    "Adventure",
    "Amusement Park",
    "Family",
    "Modern",
    "Park",
    "Photography",
    "Snack",
    "Buffet",
].sort();

export const formArr: Array<IForm> = [
    {
        type: "Location",
        title: "Where would you like to go?",
        description:
            "Enter the main destination for your trip. We will plan the trip around this location and suggest nearby attractions and activities.",
    },
    {
        type: "Dates",
        title: "Select the dates",
        description:
            "Pick your preferred travel dates: The start and end dates of your trip.",
    },
    {
        type: "Style",
        title: "What kind of trip?",
        description: "Choose the trip style that best fits your preferences.",
    },
    {
        type: "Budget",
        title: "What is your budget?",
        description:
            "Estimate the average budget you'd like to spend for each location during your trip. The higher the price level, the more expensive suggested places will be.",
    },
    {
        type: "Transport",
        title: "Select traveling method",
        description:
            "Let us know how you plan on getting around during your trip. Choose from options such as walking, driving, or a combination of both. This will help us suggest nearby attractions that fit your preferred mode of transportation.",
    },
    {
        type: "Tags",
        title: "Select some tags",
        description:
            "Select some tags to help us customize your trip. These tags will help us curate the trip plan to your interests and suggest activities and attractions that align with your preferences.",
    },
];
