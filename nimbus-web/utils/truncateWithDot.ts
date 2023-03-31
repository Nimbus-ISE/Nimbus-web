const truncateWithDot = (str: string | undefined, maxLength: number) => {
    if (str && str.length > maxLength) {
        return str.slice(0, maxLength) + "..";
    } else {
        return str;
    }
};

export default truncateWithDot;
