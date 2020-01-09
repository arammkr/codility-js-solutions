function solution(N, P, Q) {

  const max = Math.max(N, 3);
  const primes = new Array(max).fill(1);
  const semiprimes = new Array(max).fill(0);

  for (let i = 2; i * i <= N; i++) {
    for (let j = i; j * i <= N; j++) {
      primes[j * i] = 0;

      if (primes[j] && primes[i]) {
        semiprimes[i * j] = 1;
      } else {
        semiprimes[i * j] = 0;
      }
    }
  }

  let sCounter = [0]
  for (let i = 1; i < semiprimes.length; i++) {
    sCounter[i] = semiprimes[i] ? sCounter[i - 1] + 1 : sCounter[i - 1];
  }

  const result = [];

  for (let i = 0; i < P.length; i++) {
    result.push(sCounter[Q[i]] - sCounter[P[i] - 1]);
  }

  return result;
}

module.exports = solution;
