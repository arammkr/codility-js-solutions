function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const n = A.length;
  let result = 0;
  
  if (A.length < 3) return 0;
  
  A.sort((a,b) => a -b);
  
  for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
          let k = j + 1;
          
          while (k < n && isTriangle(A, i, j, k)) {
              k++;   
          }
          
          result += k - j - 1
      }
  }
  
  return result;
}

function isTriangle(A, i, j, k) {
  return A[i] + A[j] > A[k];   
}

module.exports = solution;
