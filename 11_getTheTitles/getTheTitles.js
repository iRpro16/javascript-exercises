const getTheTitles = function(array) {
    const bookArray = [];
    for(e of array) {
        bookArray.push(e.title);
    }
    return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
