import classes from "../styles/Home.module.css";
import React from "react";
import Head from "next/head";
import Hotspot from "@/components/Hotspot/Hotspot";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import { mockLocations } from "@/test_data/locationList";
import { useRouter } from "next/router";
import Slider from "@/components/SliderList/Slider";
import getTrendingList from "@/utils/api/getTrendingList";
import SearchBar from "@/components/Search/SearchBar";
import TagsButton from "@/components/Search/TagsButton";
import useMediaQuery from "@/hooks/useMediaQuery";
interface IProps {
    trendingList: Array<unknown>;
}

export default function Home({ trendingList }: IProps) {
    const router = useRouter();
    const isLargerThanMedium = useMediaQuery("(min-width: 768px)");
    return (
        <>
            <Head>
                <title>Nimbus</title>
            </Head>
            <div className="relative flex flex-col min-h-screen h-full w-screen overflow-x-hidden bg-neutral-100 text-black">
                {!isLargerThanMedium ? (
                    <div className="absolute flex top-5 left-0 right-0 w-full z-20">
                        <div className="flex flex-wrap gap-1 w-fit mx-auto px-2">
                            <SearchBar />
                            <TagsButton />
                        </div>
                    </div>
                ) : null}
                <HomeCarousel />
                <div className="mt-7">
                    <Slider
                        title="TRENDING NOW"
                        locationList={trendingList}
                        shape="rectangle"
                        onClickCallback={(id) => {
                            router.push(`/location/${id}`);
                        }}
                    />
                </div>
                <Hotspot props={[...mockLocations].splice(0, 6)} />
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const trendingList = await getTrendingList();
    console.log(trendingList);
    return { props: { trendingList } };
}
