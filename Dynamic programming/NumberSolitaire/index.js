function solution(A) {
  let result = new Array(A.length).fill(-Infinity);
  result[0] = A[0];

  for (let i = 1; i < A.length; i++) {
    for (let j = Math.max(0, i - 6); j < i; j++) {
      result[i] = Math.max(result[i], result[j] + A[i]);
    }
  }

  return result.pop();
}

module.exports = solution;
