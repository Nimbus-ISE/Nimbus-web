import sql from "@/postgres";

const getSavedPlan = async (user_id: string | undefined) => {
    return new Promise(async (resolve, reject) => {
        if (!user_id) reject();
        try {
            const savedPlanData = await sql`
            SELECT * FROM user_data U JOIN saved S 
            ON U.user_id = S.user_id
            WHERE U.user_id = ${user_id}`;
            const parsed = JSON.parse(savedPlanData);
            resolve(parsed);
        } catch (e) {
            console.log(e);
            reject();
        }
    });
};

export default getSavedPlan;
