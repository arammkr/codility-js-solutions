const solution = require('./index.js');

describe('MinAbsSumOfTwo', () => {
  test(`codility test`, () => {
    expect(solution([1, 4, -3])).toBe(1);
    expect(solution([-8, 4, 5, -10, 3])).toBe(3);
  });
});
