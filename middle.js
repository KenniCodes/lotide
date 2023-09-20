const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🫡 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🥺 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2 , 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);