const solution = require('./index.js');

describe('Nesting', () => {
  test(`codility test`, () => {
    expect(solution('(()(())())')).toBe(1);
    expect(solution('())')).toBe(0);
  });

  test(`simple test`, () => {
    expect(solution('(((()()()())))')).toBe(1);
  });
});