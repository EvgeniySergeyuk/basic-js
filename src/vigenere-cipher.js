const { fake } = require("sinon");
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
      this.type = arguments.length === 0 ? true : type;      
  }
  encrypt(str, key) {
      str = str.toLowerCase();
      key = key.toLowerCase();
      let alph = 'abcdefghijklmnopqrstuvwxyz';
      let rez = '';
      let j = 0;
      for (let i = 0; i < str.length; i++ , j++) {
          if (alph.indexOf(str[i]) === -1) {
              rez += str[i];
              j--;
              continue;
          }
          if (j === key.length) j = 0;
          let sum = alph.indexOf(str[i]) + alph.indexOf(key[j]);
          rez += alph[sum >= alph.length ? sum - alph.length : sum];
      }
      return this.type ? rez.toUpperCase() : rez.toUpperCase().split('').reverse().join('');
  }

  decrypt(str, key) {
    str = str.toLowerCase();
    key = key.toLowerCase();
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let rez = '';
    let j = 0;
    for(let i = 0; i < str.length; i++, j++){
      if(alph.indexOf(str[i]) === -1){ 
          rez += str[i];
          j--;
          continue;
      }
      if(j === key.length) j = 0;
          let sum = alph.indexOf(str[i]) - alph.indexOf(key[j]);
          rez += alph[sum < 0 ? sum + alph.length : sum];
    }
    return this.type ? rez.toUpperCase() : rez.toUpperCase().split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
