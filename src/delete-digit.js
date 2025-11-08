const { NotImplementedError } = require('../lib');

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
  return String(n).split('').map(parseFloat).reduce((acc, d, i, arr) => {
    if (arr[0] !== true && (i + 1 === arr.length || d < arr[i + 1])) {
      arr[0] = true;
      return acc;
    }
    return acc * 10 + d;
  }, 0);
}

module.exports = {
  deleteDigit
};
