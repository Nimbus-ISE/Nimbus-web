import classes from "../styles/Home.module.css";
import Head from "next/head";
import Card from "../components/Card";
import { places } from "@/public/data";
import Hotspot from "@/components/Hotspot/Hotspot";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";

export default function Home() {
    return (
        <>
            <Head>
                <title>TriPlan</title>
            </Head>
            <div className="flex flex-col min-h-screen h-full bg-neutral-100 text-black">
                <HomeCarousel />
                <Hotspot props={places} />
                <div className="flex">
                    {places.map((place: any) => (
                        <Card
                            location={place.placeName}
                            city={place.city}
                            link={place.link}
                            image={place.image}
                            tags={place.tags}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
