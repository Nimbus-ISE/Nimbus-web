import classes from "../styles/Home.module.css";
import Head from "next/head";
import Card from "../components/Card";
import { places } from "@/public/data";

export default function Home() {
    return (
        <>
            <Head>
                <title>TriPlan</title>
            </Head>
            <main className="grid place-items-center min-h-screen h-full pt-24 bg-neutral-100 text-black">
                <div className="w-80 m-auto text-center">
                    <h1 className="text-4xl font-bold p-3">TRIPLAN</h1>
                    <p className="p-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nostrum omnis consequatur maxime accusamus ea
                        voluptates sequi delectus quasi voluptatibus modi
                        aliquid, cum harum iusto soluta iste rem? Voluptates,
                        deleniti voluptatum.
                    </p>
                </div>
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
            </main>
        </>
    );
}
