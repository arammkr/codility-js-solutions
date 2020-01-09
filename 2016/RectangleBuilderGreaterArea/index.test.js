const solution = require('./index.js');

describe('RectangleBuilderGreaterArea', () => {
  test(`codility test`, () => {
    expect(solution([1, 2, 5, 1, 1, 2, 3, 5, 1], 5)).toBe(2);
  });

  test(`squares`, () => {
    expect(solution([1, 1, 1, 1, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6], 5)).toBe(8);
  });
});
