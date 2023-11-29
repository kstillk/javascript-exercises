const convertToCelsius = function(fh) {
  let resultCs = (5 / 9) * (fh - 32);
  return Math.round(resultCs * 10) / 10;
};

const convertToFahrenheit = function(cs) {
  let resultFh = 9 / 5 * cs + 32;
  return Math.round(resultFh * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
