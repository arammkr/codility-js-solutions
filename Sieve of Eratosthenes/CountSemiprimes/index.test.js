const solution = require('./index.js');

describe('CountSemiprimes', () => {
  test(`codility test`, () => {
    expect(solution(26, [1,4,16], [26, 10, 20])).toEqual(expect.arrayContaining([10, 4, 0]));
  });
  
  test(`corner case`, () => {
    expect(solution(1, [1], [1])).toEqual(expect.arrayContaining([0]));
  });
});
