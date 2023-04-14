import sql from "@/postgres";

const getLocationList = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const location_data = await sql`
            SELECT DISTINCT ON (L.loc_id) L.loc_id, L.loc_name, string_agg(B.tag_name, ',') as full_tag_list, I.url, L.price_level, L.lat, L.lng, L.rating 
            FROM location_data L 
            JOIN belong_to B ON L.loc_id = B.loc_id  
            JOIN image I ON I.loc_id = L.loc_id 
            GROUP BY L.loc_id, I.url
            ORDER BY L.loc_id, I.url`;
            resolve(location_data);
        } catch (e) {
            console.log(e);
            reject();
        }
    });
};

export default getLocationList;
