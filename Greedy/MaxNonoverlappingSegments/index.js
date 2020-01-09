
function solution(A, B) {
  if (A.length === 0) {
    return 0;
  }

  let count = 1;
  let last = B[0];

  for (let i = 1; i < A.length; i++) {
    if (A[i] > last) {
      count++;
      last = B[i];
    }
  }

  return count;
}

module.exports = solution;