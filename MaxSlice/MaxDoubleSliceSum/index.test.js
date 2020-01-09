const solution = require('./index.js');

describe('MaxDoubleSliceSum', () => {
  test(`codility test`, () => {
    expect(solution([3, 2, 6, -1, 4, 5, -1, 2])).toBe(17);
  });

  
  test(`simple`, () => {
    expect(solution([5,17,0,3])).toBe(17);
  });

  test(`simple`, () => {
    expect(solution([100, 15, 4, 5, 10])).toBe(20);
  });
});
