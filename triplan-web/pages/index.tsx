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
      <main className='grid place-items-center h-screen '>
        <div className={classes.glow}>Hello TriPlan</div>
        <div className="flex">          
          {
            places.map((place: any) => (
              <Card 
                location={place.placeName}
                city={place.city}
                link={place.link}
                image={place.image}
                tags={place.tags}
              />
            ))
          }
        </div>
      </main>
    </>
	);
}
