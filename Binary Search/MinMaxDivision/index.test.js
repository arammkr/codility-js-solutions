
const solution = require('./index.js');

describe('MinMaxDivision', () => {
  test(`codility test`, () => {
    expect(solution(3, 5, [2, 1, 5, 1, 2, 2, 2])).toBe(6);
  });

  test(`K equal to 1`, () => {
    expect(solution(1, 5, [2, 1, 5, 1, 2, 2, 2])).toBe(15);
  });

  test(`K is bigger than length of array`, () => {
    expect(solution(11, 5, [2, 1, 5, 1, 2, 2, 2])).toBe(5);
  });

  test(`{0,1} ~ 100`, () => {

    const arr = new Array(100).fill(0);
    for (let i = 1; i < arr.length; i += 2) {
      arr[i] = 1;
    }
    expect(solution(5, 5, arr)).toBe(10);
  });
});