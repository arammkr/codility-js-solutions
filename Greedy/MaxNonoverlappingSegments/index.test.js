const solution = require('./index.js');

describe('MaxNonoverlappingSegments', () => {
  test(`codility examples`, () => {
    expect(solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])).toBe(3);
  });
});
