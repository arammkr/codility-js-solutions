const solution = require('./index.js');

describe('Count div', () => {
    test(`codility test`, () => {
        expect(solution(6, 11, 2)).toBe(3);
    });

    test(`simple test`, () => {
      expect(solution(6, 12, 2)).toBe(4);
    });
});