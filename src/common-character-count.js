const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Map = new Map();
  let s2Map = new Map();
  let result = 0;
  
  let array = s1.split('');  
  array.forEach(element => {
    if(!(s1Map.has(element))){
      s1Map.set(element, 0);
    }
  });
  array = s2.split('');
  //array.forEach(element => {
  //  if(!(s2Map.has(element))){
  //    s2Map.set(element, 0);
  //  }
  //});
  
  for (let element of array){  
    if(s1Map.has(element)){
      result++;
    }
  };
  return result;
}

module.exports = {
  getCommonCharacterCount
};
