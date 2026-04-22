// tests/math.test.js
const { add, subtract, multiply } = require('../src/math');

test('add: 2 + 3 equals 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtract: 10 - 4 equals 6', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('multiply: 3 * 4 equals 12', () => {
  expect(multiply(3, 4)).toBe(12);
});