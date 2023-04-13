import sql from "../../postgres";

const getTrendingList = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const location_data = await sql`
                SELECT L.loc_id, L.loc_name, I.url, L.view_count
                FROM location_data L
                JOIN (
                    SELECT DISTINCT ON (loc_id) loc_id, url
                    FROM image
                ) I ON L.loc_id = I.loc_id
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
