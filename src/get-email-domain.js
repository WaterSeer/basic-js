const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = '';
  let arr = (""+email).split("").map(String);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '@') {
      result = arr.slice(i+1, (arr.length)).join('');
    }    
  }
  return result;
}

module.exports = {
  getEmailDomain
};
