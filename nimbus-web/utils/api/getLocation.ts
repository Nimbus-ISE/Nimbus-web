import sql from "@/postgres";

interface ILocationItemData extends IReview {
    loc_id: number;
    loc_name: string;
    address: string;
    lat: string;
    lng: string;
    description: string;
    province: string;
    location_rating: string;
    tags: string;
    url: string;
}

const getLocation = async (loc_id: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const location_data = await sql`
            SELECT L.loc_id, L.loc_name, L.description, L.province, L.address, L.lat, L.lng,
            L.rating AS location_rating, R.review_text, 
            R.author, R.rating AS review_rating, R.review_date, R.url AS review_url, I.url,
            string_agg(B.tag_name, ', ') as full_tag_list
            FROM location_data L 
            JOIN review R ON L.loc_id = R.loc_id 
            JOIN image I ON R.loc_id = I.loc_id 
            JOIN belong_to B ON L.loc_id = B.loc_id
            WHERE L.loc_id = ${loc_id}
            GROUP BY L.loc_id, R.review_text, R.author, R.review_date, R.rating, R.url, I.url
            `;
            const generalLocationInfo = {
                loc_id: location_data[0].loc_id,
                loc_name: location_data[0].loc_name,
                address: location_data[0].address,
                lat: location_data[0].lat,
                lng: location_data[0].lng,
                description: location_data[0].description,
                province: location_data[0].province,
                location_rating: location_data[0].location_rating,
                tags: location_data[0].full_tag_list,
                url: [location_data[0].url],
            };
            console.log("GENERAL DATA", generalLocationInfo);
            const reviews = location_data.map((location: ILocationItemData) => {
                const review: IReview = {
                    author: location.author,
                    review_date: Number(location.review_date),
                    review_text: location.review_text,
                    review_rating: location.review_rating,
                    review_url: location.review_url,
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
