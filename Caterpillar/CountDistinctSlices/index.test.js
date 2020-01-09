const solution = require('./index.js');

describe('CountDistinctSlices', () => {
  test(`codility test`, () => {
    expect(solution(5, [3, 4, 5, 5, 2])).toBe(9);
  });

  test(`custom test`, () => {
    expect(solution(5, [1, 2, 3, 4])).toBe(10);
  });
});