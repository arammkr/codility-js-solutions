const solution = require('./index.js');

describe('Passing Cars', () => {
    test(`codility test`, () => {
      expect(solution([0, 1, 0, 1, 1])).toBe(5);
    });

    test(`random nums`, () => {
      expect(solution([0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1])).toBe(40);
  });
});
