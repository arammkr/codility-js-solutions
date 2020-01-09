const solution = require('./index.js');

describe('MinAvgTwoSlice', () => {
    test(`codility test`, () => {
        expect(solution([4, 2, 2, 5, 1, 5, 8])).toBe(1);
    });

    test(`random nums`, () => {
      expect(solution([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(8);
  });
});
