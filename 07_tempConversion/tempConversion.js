const convertToCelsius = function(tempFarenheight) {
  const conversionToCelsius = (tempFarenheight - 32) * (5/9);
  return Math.round(conversionToCelsius*10) / 10;
};

const convertToFahrenheit = function(tempCelsius) {
  const conversionToFarenheight = (tempCelsius * (9/5)) + 32;
  return Math.round(conversionToFarenheight*10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
