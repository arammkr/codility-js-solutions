function solution(S, P, Q) {
  let A = [];
  let C = [];
  let G = [];

  for (let i = 0; i < S.length; i++) {
    if (i === 0) {
      A[i] = -1;
      C[i] = -1;
      G[i] = -1;
    } else {
      A[i] = A[i - 1];
      C[i] = C[i - 1];
      G[i] = G[i - 1];
    }

    if (S[i] === 'A') {
      A[i] = i;
    } else if (S[i] === 'C') {
      C[i] = i;
    } else if (S[i] === 'G') {
      G[i] = i;
    }
  }

  let result = [];
  for (let i = 0; i < P.length; i++) {
    const start = P[i];
    const end = Q[i];

    if (A[end] >= start) {
      result.push(1);
    } else if (C[end] >= start) {
      result.push(2);
    } else if (G[end] >= start) {
      result.push(3);
    } else {
      result.push(4);
    }
  }

  return result;
}

module.exports = solution;
