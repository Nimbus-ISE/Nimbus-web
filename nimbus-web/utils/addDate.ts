function addDays(date: any, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().slice(0, -1);
}
export default addDays;
