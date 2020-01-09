const solution = require('./index.js');

describe('ArrayInversionCount', () => {
  test(`codility test`, () => {
    expect(solution([-1, 6, 3, 4, 7, 4])).toBe(4);
  });

  test(`sample test`, () => {
    expect(solution([-1, 19, 1, 2, 20, 6, 5, 42])).toBe(7);
  });

  test(`No inversion`, () => {
    expect(solution([1, 2, 3, 4, 5, 6])).toBe(0);
  });
});