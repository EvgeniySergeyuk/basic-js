const CustomError = require("../extensions/custom-error");
  
module.exports = class DepthCalculator {  
  calculateDepth(arr) {
    let depthCount = 1;
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            return depthCount;
        } else {
            depthCount += Math.max.apply(Math, arr.map(el => this.calculateDepth(el)));
            return depthCount;
        }
    } else {
      return false;
    }
  }
};