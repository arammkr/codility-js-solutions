const solution = require('./index.js');

describe('Missing Integer', () => {
	test(`codility test`, () => {
		expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
	});

	test(`codility test with negative numbers`, () => {
		expect(solution([-1, -2, -3])).toBe(1);
	});

	test(`simple test without "increase" opearation`, () => {
		expect(solution([1, 2, 3, 5, 6, 7])).toBe(4);
	});
});