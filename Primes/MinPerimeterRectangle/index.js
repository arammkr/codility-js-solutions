function solution(N) {

  let sqrt = parseInt(Math.sqrt(N));
  let A = null;
  let B = null;
  let i = 0;

  while (A === null) {
    const tmp = sqrt - i;
    if (N % tmp === 0) {
      A = tmp;
      B = N / A;
    } else {
      i++;
    }
  }

  return 2 * (A + B)
}

module.exports = solution;