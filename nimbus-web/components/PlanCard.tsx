import Card from "@/components/Card";
import { places } from "@/public/data";

const PlanCard = (props: any) => {
    return (
        <>
            <div className="flex flex-wrap justify-center ">
                {places.map((place: any, index: number) => (
                    <div className="scale-75" key={index}>
                        <Card
                            location={place.placeName}
                            city={place.city}
                            link={place.link}
                            image={place.image}
                            tags={place.tags}
                            key={index}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default PlanCard;
