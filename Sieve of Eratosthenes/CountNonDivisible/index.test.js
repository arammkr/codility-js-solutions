const solution = require('./index.js');

describe('CountNonDivisible', () => {
  test(`codility test`, () => {
    expect(solution([3, 1, 2, 3, 6])).toEqual(expect.arrayContaining([2, 4,3, 2, 0]));
  });
});
