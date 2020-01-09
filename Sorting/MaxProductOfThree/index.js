function solution(A) {
  const n = A.length;
  if (n === 3) {
    return A[0] * A[1] * A[2];
  }

  A.sort((a, b) => a - b);

  return Math.max(A[0] * A[1] * A[n - 1], A[n - 1] * A[n - 2] * A[n - 3]);
}

module.exports = solution;

