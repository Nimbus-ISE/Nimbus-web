import sql from "../../postgres";

const getTrendingList = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const location_data = await sql`
            SELECT L.loc_id, L.loc_name, I.url
            FROM location_data L, image I
            WHERE L.loc_id = I.loc_id
            GROUP BY L.loc_id, I.url
            ORDER BY L.view_count DESC
            LIMIT 15`;
            resolve(location_data);
        } catch (e) {
            console.log(e);
            reject();
        }
    });
};

export default getTrendingList;
