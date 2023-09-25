const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 2);
const oneElm = [8];
tail(oneElm);
assertEqual(oneElm.length, 0);
const empty = [];
tail(empty);
assertEqual(empty.length, 0);