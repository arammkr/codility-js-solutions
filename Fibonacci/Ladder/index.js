function solution(A, B) {
  const steps = [1, 1];
  let maxA = null;
  let maxB = null;

  for (let i = 0; i < A.length; i++) {
    maxA = Math.max(maxA, A[i]);
    maxB = Math.max(maxB, B[i]);
  }

  for (let i = 2; i <= maxA; i++) {
    steps[i] = (steps[i - 1] + steps[i - 2]) % Math.pow(2, maxB);
  }

  const result = [];

  for (let i = 0; i < A.length; i++) {
    result.push(steps[A[i]] & Math.pow(2, B[i]) - 1)
  }

  return result;
}

module.exports = solution;
