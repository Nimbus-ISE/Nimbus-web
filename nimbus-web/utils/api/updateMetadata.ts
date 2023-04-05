const updateMetadata = async (
    tokenData: { [key: string]: string },
    user_id: string,
    payload: any
) => {
    try {
        const patchResponse = await fetch(
            `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${user_id}`,
            {
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${tokenData.access_token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    app_metadata: payload,
                }),
            }
        );
        if (!patchResponse.ok) {
            console.log(patchResponse.status, patchResponse.statusText);
            throw new Error("Network patchResponse was not ok");
        }
        const data = await patchResponse.json();
        return data;
    } catch (error) {
        console.error("There was a problem with the updateMetaData:", error);
    }
};

export default updateMetadata;
