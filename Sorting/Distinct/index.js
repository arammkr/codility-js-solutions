function solution(A) {
  if (A.length === 0 || A.length === 1) {
      return A.length;
  }
  
  A.sort((a, b) => a - b);
  
  let counter = 1;
  for (let i = 1; i < A.length; i++) {
      if (A[i] !== A[i - 1]) counter++;
  }
  
  return counter;
}

module.exports = solution;
