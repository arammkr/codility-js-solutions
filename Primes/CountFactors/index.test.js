const solution = require('./index.js');

describe('CountFactors', () => {
    test(`codility test`, () => {
      expect(solution([24])).toBe(8);
    });

    test(`simple`, () => {
      expect(solution(9)).toBe(3);
      expect(solution(15)).toBe(4);
  });
});
