import sql from "@/postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import getManagementToken from "@/utils/api/getManagementToken";

export default withApiAuthRequired(async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { user_id } = req.query;

    if (typeof user_id !== "string") {
        console.log("Invalid parameters");
        return res.status(400).json({ message: "Invalid parameters" });
    }
    // gets the management token to delete user from auth0
    const tokenData = await getManagementToken();
    if (!tokenData) {
        console.log("No token data");
        return res.status(500).json({ message: "No token data" });
    }
    // delete user from auth0
    try {
        const deleteResponse = await fetch(
            `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${user_id}`,
            {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${tokenData.access_token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        if (!deleteResponse.ok) {
            console.log(deleteResponse.status, deleteResponse.statusText);
            throw new Error("Network deleteResponse was not ok");
        }
        // delete user from database
        try {
            await sql`
                DELETE from user_data WHERE user_id = ${user_id}`;
            console.log(`User ${user_id} deleted`);
            res.status(200).json({ success: true });
        } catch (e) {
            console.log("SQL Error", e);
            res.status(500).json({ message: "Database error" });
        }
    } catch (error) {
        console.error(
            "There was a problem with deleting user in auth0:",
            error
        );
    }
});
