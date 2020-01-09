const solution = require('./index.js');

describe('TapeEquilibrium', () => {
    test(`codility test`, () => {
        expect(solution([3, 1, 2, 4, 3])).toBe(1);
    });

    test(`random nums`, () => {
        expect(solution([123, 14, 489, 91, 47, 981])).toBe(217);
    });
});
