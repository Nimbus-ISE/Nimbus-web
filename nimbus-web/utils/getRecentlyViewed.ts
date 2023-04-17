import Cookies from "js-cookie";

const getRecentlyViewed = (value?: string) => {
    let rv;
    if (value) rv = value;
    else rv = Cookies.get("rv");
    if (rv) return rv.split(",").map((item) => Number(item));
    return undefined;
};

export default getRecentlyViewed;
