const solution = require('./index.js');

describe('DwarfsRafting', () => {
  test(`codility test`, () => {
    expect(solution(4, '1B 1C 4B 1D 2A', '3B 2D')).toBe(6);
  });

  test(`test that I have failed :)`, () => {
    expect(solution(4, '1B 1A 2A', '3C 4C')).toBe(-1);
  });

  test(`free board`, () => {
    expect(solution(8, '', '')).toBe(64);
  });

  test(`free board`, () => {
    expect(solution(8, '1A 1B 7C 7A', '')).toBe(64);
  });
});
