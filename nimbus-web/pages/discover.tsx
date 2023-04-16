import React from "react";
import Card from "@/components/Cards/Card";
import Loading from "@/components/Loading";
import getLocationList from "@/utils/api/getLocationList";
import useGridColumns from "@/hooks/useGridColumns";

const discover = ({ locationProp }: any) => {
    const [locationList, setLocationList] =
        React.useState<Array<any>>(locationProp);
    //const [loading, setLoading] = React.useState<boolean>(false);
    const gridColumnsClass = useGridColumns();
    /*const query = async () => {
        try {
            setLoading(true);
            const res = await fetch(`/api/getLocationList`);
            const locationList = await res.json();
            setLocationList(locationList);
        } finally {
            setLoading(false);
        }
    };*/
    return (
        <div className="flex flex-col min-h-screen h-full w-full bg-neutral-100 text-black">
            <div className="text-left text-4xl font-extrabold px-7 py-7 drop-shadow-sm">
                DISCOVER PLACES
            </div>
            <div className="bg-white rounded-3xl shadow-md mx-5 mb-5 text-center">
                {
                    /*loading ? (
                    <div className="flex w-full my-20">
                        <Loading />
                    </div>
                ) : */ locationList ===
                    undefined ? null : locationList.length !== 0 ? (
                        <>
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
                    )
                }
            </div>
        </div>
    );
};

export default discover;

export async function getStaticProps() {
    const locationProp = await getLocationList();
    console.log(locationProp);
    return { props: { locationProp } };
}
