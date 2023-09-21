const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🫡 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(lettersToCount) {
  const result = {};
  for (const letter of lettersToCount) {
    if (letter === ' ') {
      continue;
    }
    if (letter) {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

const result1 = countLetters("LHL");
assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);