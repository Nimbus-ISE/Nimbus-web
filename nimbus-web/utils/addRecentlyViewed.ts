import Cookies from "js-cookie";
import getRecentlyViewed from "./getRecentlyViewed";

const addRecentlyViewed = (loc_id: number) => {
    const rv = getRecentlyViewed();
    //if recently viewed is undefined
    if (!rv) {
        Cookies.set("rv", loc_id.toString());
        return;
    }
    //avoids same place (guard against refreshes)
    if (rv[rv.length - 1] === loc_id) return;
    //removes oldest location if reach limit
    if (rv.length + 1 > 15) rv.shift();

    rv.push(loc_id);
    console.log(rv);
    Cookies.set("rv", rv.toString());
};

export default addRecentlyViewed;
