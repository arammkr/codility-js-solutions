const solution = require('./index.js');

describe('ChocolatesByNumbers', () => {
    test(`codility test`, () => {
        expect(solution(10, 4)).toBe(5);
    });

    test(`custom test`, () => {
        expect(solution(50, 7)).toBe(50);
    });
});