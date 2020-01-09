const solution = require('./index.js');

describe('CyclicRotation', () => {
    test(`should return same array if arrays' length equal to rotaion count (K)`, () => {
        expect(solution([1,2,3,4], 4)).toEqual(expect.arrayContaining([1,2,3,4]));
    });

    test(`should return with one rotation`, () => {
        expect(solution([1,2,3,4], 5)).toEqual(expect.arrayContaining([4,1,2,3]));
    });

    test(`should return with two rotations`, () => {
        expect(solution([1,2,3,4], 2)).toEqual(expect.arrayContaining([3,4,1,2]));
    });

    test(`simple array with one element`, () => {
        expect(solution([1], 2)).toEqual(expect.arrayContaining([1]));
    });

    test(`codility test`, () => {
        expect(solution([3, 8, 9, 7, 6], 3)).toEqual(expect.arrayContaining([9, 7, 6, 3, 8]));
    });

    test(`big array`, () => {
        const LENGTH = 10000;
        const bigArray = new Array(LENGTH);

        for (let i = 0; i < LENGTH; i++) {
            bigArray[i] = Math.ceil(Math.random() * 100);
        }
        const a = bigArray.pop();
        const b = bigArray.pop();

        const expected = [a, b, ...bigArray];
        expect(solution(bigArray, LENGTH + 2)).toEqual(expect.arrayContaining(expected));
    });
});