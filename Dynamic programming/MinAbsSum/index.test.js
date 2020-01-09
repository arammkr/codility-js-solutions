const solution = require('./index.js');

describe('MinAbsSum', () => {
  test(`codility test`, () => {
    expect(solution([1, 5, 2, -2])).toBe(0);
  });

  test(`corner case`, () => {
    expect(solution([4, 4, 4, 4, 3])).toBe(3);
    expect(solution([4, 4, 4, 4, 4, 3])).toBe(1);
  });

  test(`only 2s`, () => {
    expect(solution([2, 2, 2])).toBe(2);
  });

  test(`one big`, () => {
    expect(solution([2, -4, -3, 100])).toBe(91);
  });

  test(`random`, () => {
    expect(solution([1,2,4,7,4,12,7,-1,-14, 17, 22,-2,-4])).toBe(1);
  });
});