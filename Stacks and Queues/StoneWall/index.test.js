const solution = require('./index.js');

describe('StoneWall', () => {
  test(`codility test`, () => {
    expect(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])).toBe(7);
  });

  test(`simple test`, () => {
    expect(solution([100, 8, 93, 13, 13, 4, 56, 1, 100])).toBe(8);
  });
});