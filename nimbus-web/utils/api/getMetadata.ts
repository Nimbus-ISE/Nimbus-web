const getMetadata = async (
    tokenData: { [key: string]: string },
    user_id: string
) => {
    try {
        const getResponse = await fetch(
            `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${user_id}?fields=app_metadata&include_fields=true`,
            {
                headers: {
                    authorization: `Bearer ${tokenData.access_token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        if (!getResponse.ok) {
            console.log(getResponse.status, getResponse.statusText);
            throw new Error("Network getResponse was not ok");
        }
        const data = await getResponse.json();
        return data;
    } catch (error) {
        console.error("There was a problem with getMetadata:", error);
    }
};

export default getMetadata;
