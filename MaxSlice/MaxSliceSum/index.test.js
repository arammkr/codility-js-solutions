const solution = require('./index.js');

describe('MaxSliceSum', () => {
  test(`codility test`, () => {
    expect(solution([3, 2, -6, 4, 0])).toBe(5);
  });

  test(`corner cases`, () => {
    expect(solution([1, -2])).toBe(1);
  });

  test(`growing negative`, () => {
    expect(solution([-1, -2, -3, -4])).toBe(-1);
  });
});
