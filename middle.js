const middle = function(arr) {
  const length = arr.length;
  if (length < 3) {
    return [];
  }
  if (length % 2 != 0) {
    return [arr[Math.floor(length / 2)]];
  } else {
    return [arr[length / 2 -1], arr[length / 2]];
  }
};
module.exports = middle;