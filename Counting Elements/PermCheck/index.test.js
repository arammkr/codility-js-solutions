const solution = require('./index.js');

describe('Perm Check', () => {
    test(`codility test`, () => {
        expect(solution([4, 1, 2, 3])).toBe(1);
        expect(solution([4, 1, 3])).toBe(0);
    });
});