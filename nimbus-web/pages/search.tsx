import Card from "@/components/Cards/Card";
import Loading from "@/components/Loading";
import TagsSelect from "@/components/Search/TagsSelect";
import useElementSize from "@/hooks/useElementSize";
import React from "react";

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

const search = () => {
    const [locationList, setLocationList] = React.useState<Array<any>>();
    const [columns, setColumns] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);
    const [tagsText, setTagsText] = React.useState<string>("");
    const size = useElementSize();
    const query = async (tags: Array<string>) => {
        let tagsCollector = "";
        let tagsCollector1 = "";
        tags.forEach((tag) => {
            tagsCollector += tag + ",";
            tagsCollector1 += tag + ", ";
        });
        const tagString = tagsCollector.slice(0, tagsCollector.length - 1);
        const tagString1 = tagsCollector1.slice(0, tagsCollector1.length - 2);
        setTagsText(tagString1);
        try {
            setLoading(true);
            const res = await fetch(`/api/tagsearch/${tagString}`);
            const locationList = await res.json();
            console.log(locationList);
            setLocationList(locationList);
        } finally {
            setLoading(false);
        }
    };
    React.useEffect(() => {
        const cols = Math.floor((size.width - 80) / 288);
        const cols1 = Math.floor((size.width - 80 - (cols - 1) * 20) / 288);
        setColumns(grid[cols1 - 1]);
    }, [size]);
    return (
        <div className="flex flex-col min-h-screen h-full w-full bg-neutral-100 text-black">
            <div className="text-left text-4xl font-extrabold px-7 py-7 drop-shadow-sm">
                FILTER BY TAGS
            </div>
            <div className="bg-white rounded-3xl shadow-md mx-5 mb-5 text-center">
                <div className="py-5 border-b-[0.75px] border-neutral-400 mx-5">
                    <TagsSelect callback={query} />
                </div>
                {loading ? (
                    <div className="flex w-full my-20">
                        <Loading />
                    </div>
                ) : locationList === undefined ? null : locationList.length !==
                  0 ? (
                    <>
                        <div className="flex place-items-center w-full px-8 pt-2 text-left mx-auto text-neutral-500 text-sm">
                            <div className="text-left w-1/2">
                                Tags: {tagsText}
                            </div>
                            <div className="text-right w-1/2">
                                Found {locationList.length} results
                            </div>
                        </div>
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

export default search;
