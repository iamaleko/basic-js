const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const banned = new Set();
  let ans = 0;
  for (const row of matrix)
    for (let col = 0; col < row.length; col++)
      row[col] === 0 ? banned.add(col) : ans += banned.has(col) ? 0 : row[col];
  return ans;
}

module.exports = {
  getMatrixElementsSum
};
