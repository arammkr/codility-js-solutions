const solution = require('./index.js');

describe('LongestPassword', () => {
  test(`codility test`, () => {
    expect(solution('test 5 a0A pass007 ?xy1')).toBe(7);
  });
});