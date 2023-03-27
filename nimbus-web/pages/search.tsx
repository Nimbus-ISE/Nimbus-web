import TagsSelect from "@/components/Search/TagsSelect";
import React from "react";

const search = () => {
    const [locationList, setLocationList] = React.useState<Array<any>>();
    const query = async (tags: Array<string>) => {
        let tagsCollector = "";
        tags.forEach((tag) => {
            tagsCollector += tag + ",";
        });
        const tagString = tagsCollector.slice(0, tagsCollector.length - 1);
        console.log(tagString);
        const res = await fetch(`/api/tagsearch/${tagString}`);
        const locationList = await res.json();
        setLocationList(locationList);
    };
    return (
        <div className="flex flex-col min-h-screen h-full bg-neutral-100 text-black">
            <div className="text-left text-4xl font-extrabold px-8 py-5">
                TAG SEARCH
            </div>
            <div className="bg-white rounded-3xl shadow-md mx-5 p-5">
                <TagsSelect callback={query} />
            </div>
            <div className="flex">
                {locationList?.map((location) => {
                    return (
                        <div>
                            {location.loc_id} : {location.loc_name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default search;
