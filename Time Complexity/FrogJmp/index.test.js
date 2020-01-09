const solution = require('./index.js');

describe('FrogJmp', () => {
    test(`codility test`, () => {
        expect(solution(10, 85, 30)).toBe(3);
    });

    test(`simple test`, () => {
        expect(solution(435, 1235, 54)).toBe(15);
    });

    test(`negative test`, () => {
        expect(solution(435, 434, 54)).toBe(0);
    });
});