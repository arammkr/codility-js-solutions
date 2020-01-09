
const solution = require('./index.js');

describe('CommonPrimeDivisors', () => {
    test(`codility test`, () => {
        expect(solution([15, 10, 3], [75, 30, 5])).toBe(1);
    });

    test(`custom test`, () => {
        expect(solution([12, 11], [24, 22])).toBe(1);
    });
});