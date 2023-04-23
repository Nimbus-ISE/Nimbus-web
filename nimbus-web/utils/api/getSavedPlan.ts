import sql from "@/postgres";

const getSavedPlan = async (user_id: string | undefined) => {
    return new Promise(async (resolve, reject) => {
        if (!user_id) reject();
        try {
            const savedPlanData = await sql`
            SELECT plan_id, plan_sequence FROM plan where plan_id in (
                SELECT plan_id FROM user_data U JOIN saved S 
                 ON U.user_id = S.user_id
                 WHERE U.user_id = ${user_id})`;
            console.log("SAVEDPLANDATA", savedPlanData);
            const mapped = savedPlanData.map((planData: any) => {
                const temp = JSON.parse(planData.plan_sequence)[0];
                temp.plan_id = planData.plan_id;
                return temp;
            });
            console.log("MAPPED", mapped);
            resolve(mapped);
        } catch (e) {
            console.log(e);
            reject();
        }
    });
};

export default getSavedPlan;
