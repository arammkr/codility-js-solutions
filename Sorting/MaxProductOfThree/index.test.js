const solution = require('./index.js');

describe('MaxProductOfThree', () => {
  test(`codility test`, () => {
    expect(solution([-3, 1, 2, -2, 5, 6])).toBe(60);
  });

  test(`big positives`, () => {
    expect(solution([12, 56, 48, 123, -1, -10, 0])).toBe(330624);
  });


  test(`when there only two positives`, () => {
    expect(solution([10, 5, -3, -1])).toBe(30);
    expect(solution([-97, -1, -98, 99, 100])).toBe(950600);
  });
});