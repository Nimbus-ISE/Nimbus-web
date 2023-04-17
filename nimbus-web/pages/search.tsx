import Card from "@/components/Cards/Card";
import Loading from "@/components/Loading";
import TagsSelect from "@/components/Search/TagsSelect";
import useGridColumns from "@/hooks/useGridColumns";
import React from "react";

const search = () => {
    const [locationList, setLocationList] = React.useState<Array<any>>();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [tagsText, setTagsText] = React.useState<string>("");
    const gridColumnsClass = useGridColumns();
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
                            className={`grid ${gridColumnsClass} gap-5 w-fit mx-auto m-5 my-8`}
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
