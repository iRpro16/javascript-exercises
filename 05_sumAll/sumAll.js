const sumAll = function(int1, int2) {
    // get bigger argument
    let smallerNum = Math.min(int1, int2);
    let biggerNum = Math.max(int1, int2);

    // check conditions
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";
    if (int1 < 0 || int2 < 0) return "ERROR";

    // addSum
    let sum = 0;
    for (let i = smallerNum; i <= biggerNum; i++) {
        sum+=i;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
