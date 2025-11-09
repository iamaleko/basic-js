const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const ans = [...arr];
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] === '--discard-next' && i + 1 < ans.length) ans[i + 1] = '';
    if (ans[i] === '--discard-prev' && i > 0) ans[i - 1] = '';
    if (ans[i] === '--double-next' && i + 1 < ans.length) ans[i] = ans[i + 1]
    if (ans[i] === '--double-prev' && i > 0) ans[i] = ans[i - 1]
  }
  return ans.filter((val) => typeof val !== 'string');
}

module.exports = {
  transform
};
