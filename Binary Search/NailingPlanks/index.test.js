
const solution = require('./index.js');

describe('NailingPlanks', () => {
  test(`codility test`, () => {
    expect(solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2])).toBe(4);
  });
});
