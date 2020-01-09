const solution = require('./index.js');

describe('Ladder', () => {
  test(`codility examples`, () => {
    expect(solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1])).toEqual(expect.arrayContaining([5, 1, 8, 0, 1]));
  });
});
