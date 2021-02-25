
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.map((item, i) => i % 2 === 0 ? item : item.reverse()).flat();
};