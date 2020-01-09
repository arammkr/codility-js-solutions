function solution(A) {

  if (A.length === 1) {
    return A[0]
  };

  let maxSlice = A[0];
  let maxResult = Math.max(maxSlice, -Infinity);

  for (let i = 1; i < A.length; i++) {
    maxSlice = Math.max(maxSlice + A[i], A[i]);
    maxResult = Math.max(maxSlice, maxResult);
  }

  return maxResult;
}

module.exports = solution;
