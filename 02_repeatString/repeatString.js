const repeatString = function(string, num) {
    let phrase = "";
    if (num >= 0) {
        for (i = 0; i < num; i++) {
            phrase += string;
        }
    } else {
        return "ERROR";
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
