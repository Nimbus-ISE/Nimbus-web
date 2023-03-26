import sql from "@/postgres";

const getLocation = async (loc_id: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            // TODO: Needs to select more stuff to render required data for full place detail pages
            const location_data = await sql`
            SELECT * FROM location_data WHERE loc_id = ${loc_id}`;
            console.log(location_data[0]);
            resolve(location_data[0]);
        } catch (e) {
            console.log(e);
            reject();
        }
    });
};

export default getLocation;
