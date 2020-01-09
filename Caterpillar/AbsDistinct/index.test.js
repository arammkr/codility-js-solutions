const solution = require('./index.js');

describe('AbsDistinct', () => {
  test(`custom test`, () => {
    expect(solution([-3, -2, 0, 1, 2])).toBe(4);
  });
});