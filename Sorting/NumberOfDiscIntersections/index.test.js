const solution = require('./index.js');

describe('NumberOfDiscIntersections', () => {
  test(`codility test`, () => {
    expect(solution([1, 5, 2, 1, 4, 0])).toBe(11);
  });

  test(`same radius with same distance`, () => {
    expect(solution([1, 1, 1])).toBe(3);
  });

  test(`has no intersections`, () => {
    expect(solution([0.4, 0.4, 0.4])).toBe(0);
  });

  test(`many intersections`, () => {
    expect(solution([10, 10, 10, 10, 10, 10])).toBe(15);
  });
});
