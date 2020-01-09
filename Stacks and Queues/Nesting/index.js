function solution(S) {
  const stack = [];
  for (let char of S) {
      if (char === '(') {
          stack.push(char);
          continue;
      }
      
      if (stack.length === 0) {
          return 0;
      }
      
      stack.pop()
  }
  
  
  return stack.length === 0 ? 1 : 0;
}

module.exports = solution;
