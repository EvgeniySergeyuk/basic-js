const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string' || Number(sampleActivity) !== NaN) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let time = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k;
  return Math.ceil(time);
};
