const reverseString = function(string) {
    // set empty array
    let arr = [];
    // spread operator to turn iterable to array
    arr = [...string];
    // reverse order of array
    let reverseString = arr.reverse();
    // join array with empty string and then convert to string
    let reversedString = reverseString.join("").toString()
    // return string
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
