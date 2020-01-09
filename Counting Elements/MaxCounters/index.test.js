const solution = require('./index.js');

describe('Max Counters', () => {
    test(`codility test`, () => {
        expect(solution(5, [3, 4, 4, 6, 1, 4, 4])).toEqual(expect.arrayContaining([3, 2, 2, 4, 2]));
    });

    test(`simple test without "max counter" opearation`, () => {
        expect(solution(5, [3, 4, 4, 3, 1, 4, 4])).toEqual(expect.arrayContaining([1, 0, 2, 4]));
    });

    test(`simple test without "increase" opearation`, () => {
        expect(solution(5, [9, 6, 8, 12])).toEqual(expect.arrayContaining([0, 0, 0, 0]));
    });
});