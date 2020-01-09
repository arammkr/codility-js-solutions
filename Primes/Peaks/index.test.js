const solution = require('./index.js');

describe('Peaks', () => {
  test(`codility test`, () => {
    expect(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).toBe(3);
  });
});
