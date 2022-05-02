const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = (""+n).split("").map(Number);
  let result = 0;  
  
  for (let i = 0; i < array.length; i++) {
    let localMax = [];
    for (let j = 0; j < array.length; j++) {
      if (i != j){
        localMax.push(array[j]); 
      }      
    }
    if (result < parseInt(localMax.join(''))){
      result = parseInt(localMax.join(''));      
    }
    localMax = 0;
  }
  return result;
}

module.exports = {
  deleteDigit
};
