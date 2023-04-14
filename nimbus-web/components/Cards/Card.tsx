import React from "react";
import { useRouter } from "next/router";
import Stars from "../Stars";
import Image from "next/image";
import truncateWithDot from "@/utils/truncateWithDot";

export default function Card({ location }: { location: any }) {
    const router = useRouter();
    const [tagList, setTagList] = React.useState<Array<string>>([]);
    React.useEffect(() => {
        setTagList(location.full_tag_list.split(","));
    }, [location.full_tag_list]);
    return (
        <>
            <button
                onClick={() => {
                    router.push(`/location/${location.loc_id}`);
                }}
            >
                <div className="group w-72 max-w-sm overflow-hidden shadow-md hover:shadow-xl bg-white duration-500 rounded-xl">
                    <Image
                        className="w-full h-40 aspect-auto hover:-translate-y-1 hover:scale-105 transition duration-700"
                        height={160}
                        width={288}
                        src={location.url}
                        alt={location.loc_name}
                    />
                    <div className="px-6 py-4 pb-0">
                        <div className="text-left font-bold whitespace-nowrap text-sm mb-1 text-slate-700">
                            {truncateWithDot(location.loc_name, 30)}
                        </div>
                        <Stars size={16} rating={Number(location.rating)} />
                    </div>
                    <div className="">
                        <div
                            className="flex px-6 pt-4 overflow-x-scroll"
                            key="tag-row"
                        >
                            {tagList.map((tag: string, index: number) => (
                                <span
                                    className="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold 
                                    text-gray-700 mr-2 mb-2 hover:opacity-80 whitespace-nowrap"
                                    key={tag}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </button>
        </>
    );
}
