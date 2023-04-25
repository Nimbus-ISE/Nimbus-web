const fetchLocationDetails = async (queryObj: any) => {
    const response = await fetch(`/api/getLocationData?loc_ids=${queryObj}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queryObj),
    });
    const data = await response.json();
    return data;
};
export default fetchLocationDetails;
