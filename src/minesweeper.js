const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (!matrix.length) return [];
  const mcol = matrix[0].length,
        mrow = matrix.length,
        ans = new Array(mrow).fill().map(() => new Array(mcol));
  for (let row = 0; row < mrow; row++)
    for (let col = 0; col < mcol; col++)
      ans[row][col] = [
        [row - 1, col - 1],
        [row - 1, col],
        [row - 1, col + 1],
        [row + 1, col - 1],
        [row + 1, col],
        [row + 1, col + 1],
        [row, col - 1],
        [row, col + 1],
      ].reduce(
        (acc, [row, col]) => acc + (row >= 0 && col >= 0 && row < mrow && col < mcol && matrix[row][col] ? 1 : 0),
        0,
      );
  return ans;
}

module.exports = {
  minesweeper
};
