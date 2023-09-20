const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🫡 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("String", "string");
assertEqual(3, 19);

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🫡 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🥺 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
return assertArraysEqual([1, 2, 3], [1, 2, 3]);