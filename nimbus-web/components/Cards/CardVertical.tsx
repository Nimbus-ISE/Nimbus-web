import Link from "next/link";

export default function Card(props: any) {
    return (
        <>
            <Link href={props.link} target="_blank">
                <div className="group w-72 max-w-sm overflow-hidden shadow-lg bg-white hover:scale-105 duration-500 rounded-xl">
                    <img
                        className="h-40 w-full aspect-auto scale-105 group-hover:brightness-125 duration-700"
                        src={props.image}
                        alt={props.location}
                    />
                    <div className="px-6 py-4 pb-0">
                        <div className="font-bold text-xl mb-2 text-slate-700">
                            {props.location}
                        </div>
                        <div className="flex flex-row font-normal italic text-base text-slate-500">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                            </div>
                            <div>{props.city}</div>
                        </div>
                    </div>
                    <div className="">
                        <div
                            className="flex flex-wrap content-start h-16 px-6 pt-4 pb-2"
                            key="tag-row"
                        >
                            {props.tags.map((tag: string, index: number) => (
                                <span
                                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:opacity-80"
                                    key={index}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
