const solution = require('./index.js');

describe('Frog River One', () => {
    test(`codility test`, () => {
        expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6);
    });

    test(`frog can not cross the river`, () => {
        expect(solution(6, [1, 3, 1, 4, 2, 3, 5, 4, 7])).toBe(-1);
    });

    test(`frog cross the river`, () => {
        expect(solution(5, [1, 3, 5, 2, 4, 2, 3, 5, 4, 6, 7])).toBe(4);
    });
});