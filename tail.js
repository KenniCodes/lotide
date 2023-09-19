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

function tail(arr) {
  return arr.splice(0,1);
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 2);
const oneElm = [8];
tail(oneElm);
assertEqual(oneElm.length, 0);
const empty = [];
tail(empty);
assertEqual(empty.length, 0);