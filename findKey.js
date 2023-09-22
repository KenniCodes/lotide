const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🫡 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const result2 = findKey({
  "Instagram": { accounts: 2},
  "X":         { accounts: 0},
  "YouTube":   { accounts: 1},
  "Netflix":   { accounts: 2}
}, x => x.accounts === 1);

const result3 = findKey({
  "May":        { days: 31},
  "June":       { days: 30},
  "July":       { days: 31},
  "August":     { days: 31},
  "September":  { days: 30}
}, x => x.days === 30);

assertEqual(result, "noma");
assertEqual(result2, "YouTube");
assertEqual(result3, "June");
