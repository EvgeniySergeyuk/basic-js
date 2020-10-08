const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (typeof(arr) !== 'object') throw new Error();
  let transformArr = [];
  for (let i = 0; i < arr.length; i++) {
    transformArr.push(arr[i]);
  }  
  for (let i = 0; i < transformArr.length; i++) {
    if (transformArr[i] === '--discard-next') {
      if (transformArr[i + 1] !== undefined) {
        if (transformArr[i + 2] === '--discard-prev' || transformArr[i + 2] === '--double-prev') transformArr.splice(i, 3);
        else transformArr.splice(i, 2);
        i--;
      }
      else transformArr.pop();
    }
    else if (transformArr[i] === '--discard-prev') {
      if (transformArr[i - 1] !== undefined) transformArr.splice(i - 1, 2);
      else transformArr.splice(i, 1);
      i--;
    }
    else if (transformArr[i] === '--double-next') {
      if (transformArr[i + 1] !== undefined) transformArr[i] = transformArr[i + 1];
      else transformArr.pop();
    }
    else if (transformArr[i] === '--double-prev') {
      if (transformArr[i - 1] !== undefined) transformArr[i] = transformArr[i - 1]; 
      else {transformArr.splice(i, 1); i--;}      
    }
  }
  return transformArr;
};
