const solution = require('./index.js');

describe('Distinct', () => {
  test(`codility test`, () => {
    expect(solution([2, 1, 1, 2, 3, 1])).toBe(3);
  });

  test(`corner cases`, () => {
    expect(solution([1032])).toBe(1);
    expect(solution([])).toBe(0);
  });
});
