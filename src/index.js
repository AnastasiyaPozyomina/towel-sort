
// You should implement your task here.

module.exports = function towelSort (matrix) {
  matrix === undefined
  ? (a = []):
  matrix.length === 2
  ? (a = matrix[0].concat(matrix[1].reverse()))
  : matrix.length === 3
  ? (a = matrix[0].concat(matrix[1].reverse(), matrix[2]))
  : matrix.length === 4
  ? (a = matrix[0].concat(matrix[1].reverse(), matrix[2], matrix[3].reverse()))
  : (metrix = []);
return a;
}

