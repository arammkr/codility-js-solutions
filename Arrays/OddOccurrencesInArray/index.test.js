const solution = require('./index.js');

describe('OddOccurrencesInArray', () => {
    test(`codility test`, () => {
        expect(solution([9, 3, 9, 3, 9, 7, 9])).toBe(7);
    });

    test(`codility test`, () => {
        expect(solution([1,2,3,4,5,6,7,1,2,3,4,5,6,7,8])).toBe(8);
    });
});