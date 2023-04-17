import FullDetailCard from "@/components/FullDetailCard/FullDetailCard";
import useMediaQuery from "@/hooks/useMediaQuery";
import addRecentlyViewed from "@/utils/addRecentlyViewed";
import getLocation from "@/utils/api/getLocation";
import { GetStaticPropsContext } from "next";
import Background from "@/components/Background";
import React from "react";

interface IProps {
    location: any;
}

const location = ({ location }: IProps) => {
    const isLargerThanMedium = useMediaQuery("(min-width:768px)");
    React.useEffect(() => {
        console.log("add to recently viewed");
        addRecentlyViewed(location.loc_id);
    }, []);
    return (
        <div className="relative flex min-h-screen h-full w-full overflow-x-hidden font-montserrat bg-neutral-100">
            <Background />
            <div
                style={{
                    marginTop: isLargerThanMedium ? "2.5%" : 0,
                    marginBottom: isLargerThanMedium ? "2.5%" : 0,
                }}
                className={`flex flex-col md:rounded-xl shadow-lg bg-neutral-100 h-full
                min-h-screen m-auto max-w-[81rem] w-full md:w-[90%] min-w-[280px] z-10 pb-5`}
            >
                <FullDetailCard location={location} />
            </div>
        </div>
    );
};

export default location;

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking", // can also be true or 'blocking'
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { params } = context;
    const loc_id = params?.loc_id;
    const location = await getLocation(loc_id as string);
    console.log(location);
    return { props: { location } };
}
