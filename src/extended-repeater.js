const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {  
  let subResult = str;
  let result = '';
  if (str === null || str === undefined) str = String(str);
  else if (typeof(str) !== 'string') str = str.toString();
  if (options.addition === null) options.addition = String(options.addition);
  else if (options.addition !== undefined && typeof(options.addition) !== 'string') options.addition = options.addition.toString();  
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.additionRepeatTimes !== undefined) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      subResult += options.addition + options.additionSeparator;
    }
    subResult = subResult.substring(0, subResult.length - options.additionSeparator.length);    
  }
  if (options.repeatTimes !== undefined) {
    for (let i = 0; i < options.repeatTimes; i++) {
      result += subResult + options.separator;
    }
    result = result.substring(0, result.length - options.separator.length);
  }
  else result = subResult + options.addition;
  return result;
};
  
