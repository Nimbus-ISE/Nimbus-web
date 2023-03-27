const capitalizeFirst = (str: string) => {
    let result =
        str.substring(0, 1).toLocaleUpperCase() + str.substring(1, str.length);
    return result;
};
export default capitalizeFirst;
