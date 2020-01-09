function solution(A) {
  const max = Math.max.apply(null, A);
  const div = new Array(max + 1).fill(0);
  const count = new Array(max + 1).fill(0);
  
  for (const item of A) {
      div[item] = 1;
      count[item]++;
  }
  
  for (let i = 0; i <= A.length; i++) {
      for (let j = 2; A[i] * j <= max; j++) {
          if (div[A[i] * j]) {
              count[A[i] * j]++   
          }
      }   
  }
  
  const result = [];
  const lengthA = A.length;
  for (const item of A) {
      result.push(lengthA - count[item]);
  }
  
  return result;
}

module.exports = solution;