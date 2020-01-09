const solution = require('./index.js');

describe('MinPerimeterRectangle', () => {
  test(`codility test`, () => {
    expect(solution([30])).toBe(22);
  });

  test(`simple`, () => {
    expect(solution(60)).toBe(32);
  });
});
