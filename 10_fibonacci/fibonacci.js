const fibonacci = function(num) {
    const array  = [0,1];
    for (i = 0; i < num; i++) {
        let lastInt = array[array.length - 1];
        let secondLastInt = array[array.length -2];
        array.push(lastInt + secondLastInt);
    }
    if (num >= 0) {
        return array[array.length - 2];
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
