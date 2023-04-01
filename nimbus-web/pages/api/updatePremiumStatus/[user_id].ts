import sql from "../../../postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import {
    getSession,
    updateSession,
    withApiAuthRequired,
} from "@auth0/nextjs-auth0";

//protected route (user must be authenticated)
export default withApiAuthRequired(async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { user_id } = req.query;
    //gets premium status from database through user_id
    const premiumStatusData =
        await sql`SELECT premium_type,premium_expire FROM user_data where user_id=${user_id}`;
    console.log(premiumStatusData);
    //checks if premium status is expired or not
    const checkPremiumStatus = ({
        premium_type,
        premium_expire,
    }: {
        premium_type: string;
        premium_expire: Date;
    }) => {
        if (premium_type === "None" || Date.now() < Number(premium_expire))
            return premium_type;
        return "None";
    };
    if (req.method === "PUT") {
        try {
            const session = await getSession(req, res);
            if (session) {
                try {
                    //appends premium status and premium_expire to the session/user object
                    await updateSession(req, res, {
                        ...session,
                        user: {
                            ...session.user,
                            premium: checkPremiumStatus(premiumStatusData[0]),
                            premium_expire: premiumStatusData[0].premium_expire,
                        },
                    });
                    res.json({ success: true });
                } catch (e) {
                    console.log(e);
                    res.status(500);
                }
            } else {
                res.status(500);
            }
        } catch (e) {
            console.log(e);
            res.status(500);
        }
        res.status(500);
    }
});
