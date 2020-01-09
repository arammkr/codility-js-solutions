const solution = require('./index.js');

describe('Fish', () => {
  test(`codility test`, () => {
    expect(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).toBe(2);
  });

  test(`big fish going down`, () => {
    expect(solution([10, 3, 2, 1, 5], [1, 0, 0, 0, 0])).toBe(1);
  });

  test(`no one will be eaten`, () => {
    expect(solution([10, 3, 2, 1, 5], [0, 0, 0, 1, 1, 1])).toBe(6);
  });
});
