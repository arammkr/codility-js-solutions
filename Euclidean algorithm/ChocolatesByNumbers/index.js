const { gcd } = require('../utils');

function solution(N, M) {
    if (N === 1 || M === 1) {
        return N;
    }

    return N / gcd(M, N);
}

module.exports = solution;