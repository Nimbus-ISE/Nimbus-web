import React from "react";
import Card from "@/components/Cards/Card";
import Loading from "@/components/Loading";
import getLocationList from "@/utils/api/getLocationList";
import useGridColumns from "@/hooks/useGridColumns";
import useMediaQuery from "@/hooks/useMediaQuery";
import Background from "@/components/Background";

const discover = ({ locationProp }: any) => {
    const [locationList, setLocationList] =
        React.useState<Array<any>>(locationProp);
    //const [loading, setLoading] = React.useState<boolean>(false);
    const gridColumnsClass = useGridColumns("discover-page-container");
    const isLargerThanMedium = useMediaQuery("(min-width:768px)");
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
        <div className="relative flex flex-col min-h-screen h-full w-full bg-neutral-100 text-black">
            <Background />
            <div
                id="discover-page-container"
                style={{
                    marginTop: isLargerThanMedium ? "2.5%" : 0,
                    marginBottom: isLargerThanMedium ? "2.5%" : 0,
                }}
                className={`flex flex-col md:rounded-xl shadow-lg bg-neutral-100 h-full
                min-h-screen m-auto max-w-[81rem] w-full md:w-[90%] min-w-[280px] z-10 pb-5`}
            >
                <div className="text-left text-4xl font-extrabold px-7 py-7 drop-shadow-sm">
                    DISCOVER PLACES
                </div>
                <div className="rounded-3xl mb-5 text-center w-full">
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
        </div>
    );
};

export default discover;

export async function getStaticProps() {
    const locationProp = await getLocationList();
    console.log(locationProp);
    return { props: { locationProp } };
}
