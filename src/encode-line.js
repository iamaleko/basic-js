const { NotImplementedError } = require('../lib');

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
  if (!str.length) {
    return '';
  }
  let ans = ''
  let count = 1;
  let curr = str[0];
  for (const char of str.slice(1)) {
    if (char !== curr) {
      ans += `${count > 1 ? count : ''}${curr}`;
      count = 1;
      curr = char;
    } else {
      count++;
    }
  }
  return ans + `${count > 1 ? count : ''}${curr}`;
}

module.exports = {
  encodeLine
};
