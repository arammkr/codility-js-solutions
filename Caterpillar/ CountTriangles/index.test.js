const solution = require('./index.js');

describe('CountTriangles', () => {
  test(`codility test`, () => {
    expect(solution([10, 2, 5, 1, 8, 12])).toBe(4);
  });
});