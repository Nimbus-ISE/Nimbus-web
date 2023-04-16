import sql from "../../postgres";

const getRecentlyViewedList = async (rv: Array<number>) => {
    return new Promise(async (resolve, reject) => {
        try {
            const location_data = await sql`
                SELECT L.loc_id, L.loc_name, I.url, L.view_count
                FROM location_data L
                JOIN (
                    SELECT DISTINCT ON (loc_id) loc_id, url
                    FROM image
                ) I ON L.loc_id = I.loc_id
                WHERE L.loc_id IN ${sql(rv)}
                GROUP BY L.loc_id, I.url
                ORDER BY L.view_count DESC`;
            resolve(location_data);
        } catch (e) {
            console.log(e);
            reject();
        }
    });
};

export default getRecentlyViewedList;
