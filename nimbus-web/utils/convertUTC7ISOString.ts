import addHours from "date-fns/addHours";

const convertDateToUTCPlus7 = (datestr: string) => {
    const isoString = addHours(new Date(datestr), 7).toISOString();
    return isoString.slice(0, isoString.length - 1);
};

export default convertDateToUTCPlus7;
