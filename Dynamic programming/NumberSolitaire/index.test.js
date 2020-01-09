const solution = require('./index.js');

describe('NumberSolitaire', () => {
    test(`codility test`, () => {
        expect(solution([1,-2,0,9,-1,-2])).toBe(8);
    });
});