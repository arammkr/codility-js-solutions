const solution = require('./index.js');

describe('MaxProfit', () => {
  test(`codility test`, () => {
    expect(solution([23171, 21011, 21123, 21366, 21013, 21367])).toBe(356);
  });

  test(`corner cases`, () => {
    expect(solution([])).toBe(0);
    expect(solution([1])).toBe(0);
  });

  test(`simple`, () => {
    expect(solution([1,2,3,4,5,3,1,4,1])).toBe(4);
  });
});
