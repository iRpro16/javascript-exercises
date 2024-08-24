const removeFromArray = function(array, ...elements) {
    return array.filter(e => {
        return !elements.includes(e)
    });
};

// Do not edit below this line
module.exports = removeFromArray;
