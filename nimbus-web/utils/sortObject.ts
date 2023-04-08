function compare(a: any, b: any) {
    if (a.day < b.day) {
        return -1;
    }
    if (a.day > b.day) {
        return 1;
    }
    return 0;
}
function sortObject(objs: any) {
    objs.sort(compare);
    return objs;
}

export default sortObject;
