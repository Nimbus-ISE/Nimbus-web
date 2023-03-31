import sql from "@/postgres";

interface ILocationItemData {
    loc_id: number;
    loc_name: string;
    description: string;
    province: string;
    location_rating: string;
    url: string;

    author: string;
    review_text: string;
    review_rating: string;
    review_date: Date;
}

const getLocation = async (loc_id: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const location_data = await sql`
            SELECT L.loc_id, L.loc_name, L.description, L.province, 
            L.rating AS location_rating, R.review_text, 
            R.author, R.rating AS review_rating, R.review_date, I.url
            FROM location_data L, review R, image I
            WHERE L.loc_id = R.loc_id AND R.loc_id = I.loc_id AND L.loc_id IN (${loc_id})
            GROUP BY L.loc_id, R.review_text, R.author, R.review_date, R.rating, I.url`;
            const generalLocationInfo = {
                loc_id: location_data[0].loc_id,
                loc_name: location_data[0].loc_name,
                description: location_data[0].description,
                province: location_data[0].province,
                location_rating: location_data[0].location_rating,
                url: location_data[0].url,
            };
            console.log("GENERAL DATA", generalLocationInfo);
            const reviews = location_data.map((location: ILocationItemData) => {
                const review: IReview = {
                    author: location.author,
                    review_date: Number(location.review_date),
                    review_text: location.review_text,
                    review_rating: location.review_rating,
                };
                return review;
            });
            const completedLocationData = {
                ...generalLocationInfo,
                reviews: reviews,
            };
            resolve(completedLocationData);
        } catch (e) {
            console.log(e);
            reject();
        } finally {
            //updates view count
            await sql`UPDATE location_data
            SET view_count = view_count+1
            WHERE loc_id = ${loc_id}`;
        }
    });
};

export default getLocation;
