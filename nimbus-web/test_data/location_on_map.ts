interface LocationType {
    longitude: number;
    latitude: number;
    location: string;
    province: string;
    image: string;
}
export const location_data: Array<LocationType> = [
    {
        longitude: 100.5018,
        latitude: 13.7563,
        location: "Siam center",
        province: "Bangkok",
        image: "https://cdn.britannica.com/57/20057-004-404C9F85/Grand-Palace-Bangkok-Thailand.jpg",
    },
    {
        longitude: 100.4018,
        latitude: 13.1563,
        location: "Siam not center",
        province: "Bangkok",
        image: "https://cdn.britannica.com/57/20057-004-404C9F85/Grand-Palace-Bangkok-Thailand.jpg",
    },
    {
        longitude: 100.3018,
        latitude: 13.9563,
        location: "Siam not center 2: electric boogaloo",
        province: "Bangkok",
        image: "https://cdn.britannica.com/57/20057-004-404C9F85/Grand-Palace-Bangkok-Thailand.jpg",
    },
];
