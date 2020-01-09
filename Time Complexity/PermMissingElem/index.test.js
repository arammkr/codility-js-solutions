const solution = require('./index.js');

describe('PermMissingElem', () => {
    test(`codility test`, () => {
        expect(solution([2, 3, 1, 5])).toBe(4);
    });

    test(`last number is missing`, () => {
        expect(solution([1, 2, 3, 4, 5, 6])).toBe(7);
    });
});