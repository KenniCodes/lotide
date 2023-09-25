const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const oneElm = [8];
const empty = [];

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]',() => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  }),
  it('returns [] for [8]', () => {
    assert.deepEqual(tail(oneElm), []);
  }),
  it('returns [] for []', () => {
    assert.deepEqual(tail(empty), []);
  });
});