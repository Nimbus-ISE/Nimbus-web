const getUniqueList = (arr: Array<any>, field: string) => {
    return arr.filter(
        (item: any, index: number, self: any) =>
            index === self.findIndex((obj: any) => obj[field] === item[field])
    );
};

export default getUniqueList;
