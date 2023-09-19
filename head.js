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

function head(arr) {
  return arr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([87]), 87);
assertEqual(head([], undefined));