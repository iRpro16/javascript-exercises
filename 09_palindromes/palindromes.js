const palindromes = function (string) {
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanString = string
    .toLowerCase()
    .split("")
    .filter((e) => alphanumeric.includes(e))
    .join("")

    const reverseString = cleanString.split("").reverse().join("");

    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
