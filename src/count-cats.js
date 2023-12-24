const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const catEars = '^^';
  let countEars = 0;
  let result;
  if (matrix.includes(catEars)) {
  for ( let i = 0; i < matrix.length; i++) {
    for ( let j = 0; j < matrix[i].length; j++) {
        let test = matrix[i][j];
        if(test.includes(catEars)) {
          return countEars += catEars.length / 2
     }
   }
  }
} else return 0;
}

module.exports = {
  countCats
};
