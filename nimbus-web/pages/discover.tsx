import React from "react";
import useElementSize from "@/hooks/useElementSize";
import SearchBar from "@/components/Search/SearchBar";
import Card from "@/components/Cards/Card";
import Loading from "@/components/Loading";

const grid = [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
];

const discover = () => {
    const [locationList, setLocationList] = React.useState<Array<any>>();
    const [columns, setColumns] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);
    const size = useElementSize();
    const query = async () => {
        try {
            setLoading(true);
            const res = await fetch(`/api/getLocationList`);
            const locationList = await res.json();
            setLocationList(locationList);
        } finally {
            setLoading(false);
        }
    };
    React.useEffect(() => {
        query();
    }, []);
    React.useEffect(() => {
        const cols = Math.floor((size.width - 80) / 288);
        const cols1 = Math.floor((size.width - 80 - (cols - 1) * 20) / 288);
        setColumns(grid[cols1 - 1]);
    }, [size]);
    return (
        <div className="flex flex-col min-h-screen h-full w-full bg-neutral-100 text-black">
            <div className="text-left text-4xl font-extrabold px-7 py-7 drop-shadow-sm">
                DISCOVER PLACES
            </div>
            <div className="bg-white rounded-3xl shadow-md mx-5 mb-5 text-center">
                {loading ? (
                    <div className="flex w-full my-20">
                        <Loading />
                    </div>
                ) : locationList === undefined ? null : locationList.length !==
                  0 ? (
                    <>
                        <div
                            className={`grid ${columns} gap-5 w-fit mx-auto m-5 my-8`}
                        >
                            {locationList.map((location) => {
                                return <Card location={location} />;
                            })}
                        </div>
                    </>
                ) : (
                    <div className="p-10 font-semibold">
                        No location was found with the following tags
                    </div>
                )}
            </div>
        </div>
    );
};

export default discover;
