function solution(M, A) {
  if (A.length === 1) {
      return 1;
  }
  
  const LIMIT = 1000000000;
  const last = new Array(M + 1).fill(-1);
  let count = 0;
  let start = 0;
  
  for (let i = 0; i < A.length; i++) {
      const item = A[i];
      
      if (last[item] + 1 > start) {
          start = last[item] + 1;
      }
      
      last[item] = i;
      count += i - start + 1;
      
      if (count > LIMIT) {
          return LIMIT;
      }
  }
  
  return count > LIMIT ? LIMIT : count;
}

module.exports = solution;
