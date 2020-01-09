const solution = require('./index.js');

describe('Flags', () => {
  test(`codility test`, () => {
    expect(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).toBe(3);
  });

  test(`simple`, () => {
    expect(solution([1,2])).toBe(0);
  });

  test(`big`, () => {
    const arr = new Array(10000).fill(1);
    for (let i = 1; i < 10000; i += 2) {
      arr[i] = 2;
    }
    expect(solution(arr)).toBe(100);
  });
});
