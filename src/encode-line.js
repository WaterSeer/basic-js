const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let currentSymbol = arr[0];
  let repeatCounter = 1;
  let result = [];
  for (let i = 1; i < str.length; i++) {
      if(str[i] == currentSymbol)
      {
        repeatCounter++;        
      }else
      {
        if (repeatCounter > 1){
          result.push(repeatCounter);
        }
        result.push(currentSymbol);
        repeatCounter = 1;
        currentSymbol = str[i];
      }
  }
  if (repeatCounter > 1){
    result.push(repeatCounter);
  }
  result.push(currentSymbol);  
  return result.join('');
}

module.exports = {
  encodeLine
};
