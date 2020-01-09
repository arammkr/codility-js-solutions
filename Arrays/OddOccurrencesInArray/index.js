function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let result = A[0];
    for (let i = 1; i < A.length; i++) {
        result = result ^ A[i];
    }

    return result;
}

module.exports = solution;