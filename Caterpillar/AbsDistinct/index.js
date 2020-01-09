function solution(A) {
  const set = new Set();
  
  for (let item of A) {
      if (item < 0) {
          set.add(-1 * item);
      } else {
          set.add(item);
      }
  }
  
  return set.size;
}

module.exports = solution;
