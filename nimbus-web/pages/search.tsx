import Background from "@/components/Background";
import Card from "@/components/Cards/Card";
import Loading from "@/components/Loading";
import TagsSelect from "@/components/Search/TagsSelect";
import useGridColumns from "@/hooks/useGridColumns";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

const search = () => {
    const [locationList, setLocationList] = React.useState<Array<any>>();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [tagsText, setTagsText] = React.useState<string>("");
    const gridColumnsClass = useGridColumns("search-page-container");
    const isLargerThanMedium = useMediaQuery("(min-width:768px)");
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
            const res = await fetch(`/api/search/${tagString}`);
            const locationList = await res.json();
            // console.log(locationList);
            setLocationList(locationList);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="relative flex min-h-screen w-full bg-neutral-100 text-black">
            <Background />
            <div
                id="search-page-container"
                style={{
                    marginTop: isLargerThanMedium ? "2.5%" : 0,
                    marginBottom: isLargerThanMedium ? "2.5%" : 0,
                }}
                className={`flex flex-col md:rounded-xl shadow-lg bg-neutral-100 h-full
                min-h-screen m-auto max-w-[81rem] w-full md:w-[90%] min-w-[280px] z-10 pb-5`}
            >
                <div className="text-left text-4xl font-extrabold px-7 py-7 drop-shadow-sm">
                    FILTER BY TAGS
                </div>
                <div
                    className={`bg-white rounded-3xl shadow-md mx-5 mb-5 text-center h-fit`}
                >
                    <div
                        className={`py-5 border-b-[0.75px] ${
                            locationList
                                ? "border-neutral-400"
                                : "border-neutral-100"
                        } mx-5`}
                    >
                        <TagsSelect callback={query} />
                    </div>
                    {loading ? (
                        <div className="flex w-full my-20">
                            <Loading />
                        </div>
                    ) : locationList ===
                      undefined ? null : locationList.length !== 0 ? (
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
                                className={`grid ${gridColumnsClass} gap-5 w-fit mx-auto m-5 my-8 ${
                                    locationList ? "h-full" : "h-0"
                                }`}
                            >
                                {locationList.map((location) => {
                                    return <Card location={location} />;
                                })}
                            </div>
                        </>
                    ) : (
                        <div className="p-10 font-semibold text-neutral-400">
                            No location was found with the following tags
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default search;
