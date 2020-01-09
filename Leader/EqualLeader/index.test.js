const solution = require('./index.js');

describe('EqualLeader', () => {
  test(`codility examples`, () => {
    expect(solution([4, 3, 4, 4, 4, 2])).toBe(2);
  });

  test(`no equal leader`, () => {
    expect(solution([4, 3, 5, 6, 7, 8, 9])).toBe(0);
  });

  test(`empty array`, () => {
    expect(solution([])).toBe(0);
  });

  test(`single item array`, () => {
    expect(solution([1])).toBe(0);
  });
});
