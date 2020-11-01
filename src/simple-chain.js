const chainMaker = {
  arr: [],
  getLength() {
    this.arr.length;    
  },
  addLink(value) {
    if(value == undefined) value = 'null';
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position - 1 < 0) {
      this.arr = [];
      throw new Error;
    }
    else {
    this.arr.splice(position - 1, 1);
    return this;
  }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {    
    let result = `( ${this.arr.join(' )~~( ')} )`;
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;