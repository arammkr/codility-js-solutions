function solution(A) {
  if (A.length === 3) {
    return 0;
  }

  const left = [0, 0];
  const right = [];
  right[A.length - 1] = 0;
  right[A.length - 2] = 0;

  for (let i = 2; i < A.length; i++) {
    left[i] = Math.max(left[i - 1] + A[i - 1], A[i - 1], 0);

    const iRev = A.length - 1 - i;

    right[iRev] = Math.max(right[iRev + 1] + A[iRev + 1], A[iRev + 1], 0);
  }

  let max = -Infinity;

  for (let i = 1; i < A.length - 1; i++) {
    max = Math.max(left[i] + right[i], max);
  }

  return max;
}

module.exports = solution;