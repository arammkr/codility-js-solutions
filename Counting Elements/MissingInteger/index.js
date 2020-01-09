function solution(A) {
  const result = [];

  for (let item of A) {
    result[item] = true;
  }

  let min = 1;

  while (result[min]) min++;

  return min;
}

module.exports = solution;
