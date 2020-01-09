const solution = require('./index.js');

describe('Binary gap', () => {
    test(`codility examples`, () => {
        expect(solution(529)).toBe(4);
        expect(solution(15)).toBe(0);
    });
});
