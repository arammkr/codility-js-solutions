const solution = require('./index.js');

describe('GenomicRangeQuery', () => {
    test(`codility test`, () => {
        expect(solution('CAGCCTA', [2, 5, 0], [4, 5, 6])).toEqual(expect.arrayContaining([2, 4, 1]));
    });

    test(`test with big ranges`, () => {
      expect(solution('CAGCCTACAGCCTA', [2, 5, 1], [10, 6, 6])).toEqual(expect.arrayContaining([1, 1, 1]));
  });
});
