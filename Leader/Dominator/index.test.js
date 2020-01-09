const solution = require('./index.js');

describe('Dominator', () => {
  test(`codility examples`, () => {
    expect(solution([3, 4, 3, 2, 3, -1, 3, 3])).toBe(0);
  });
  test(`no dominator`, () => {
    expect(solution(15)).toBe(-1);
  });
});
