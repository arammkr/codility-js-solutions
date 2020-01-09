const { findLeaderCandidate } = require('../utils');

function solution(A) {
	const candidate = findLeaderCandidate(A);
	const result = [];

	for (let i = 0; i < A.length; i++) {
		if (A[i] === candidate) {
			result.push(i);
		}

		if (result.length > parseInt(A.length / 2)) {
			return result[0];
		}
	}

	return -1;
}

module.exports = solution;

