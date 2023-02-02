var converter = require("number-to-words");
const numberToWords = (num: number) => {
    return converter.toWords(num);
};
export default numberToWords;
