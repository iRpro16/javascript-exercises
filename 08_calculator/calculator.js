const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let initialValue = 0;
  return array.reduce((acc, curr) => acc + curr, initialValue);
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let array = [];
  let initialValue = 1;
    for (i = 1; i <= num; i++) {
        array.push(i);
      }
      return array.reduce((acc, curr) => acc * curr, initialValue);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
