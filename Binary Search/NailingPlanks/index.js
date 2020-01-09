function solution(A, B, C) {

  if (C.length === 1) {
    return A[0] <= C[0] && C[0] <= B[0] ? 1 : -1;
  }

  let min = 0;
  let max = C.length;
  let maxB = Math.max.apply(null, C);
  let atLeastOnce = false;

  while (min <= max) {
    let mid = parseInt((min + max) / 2);
    const nails = getNails(C, mid, maxB + 1);

    if (isAllNailed(A, B, nails)) {
      atLeastOnce = true;

      if (max === mid) {
        break;
      }
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return atLeastOnce ? min : -1;
}

function getNails(C, took, N) {
  const nails = new Array(N).fill(0);

  for (let i = 0; i < took; i++) {
    nails[C[i]] = 1;
  }

  for (let i = 1; i < nails.length; i++) {
    nails[i] += nails[i - 1];
  }

  return nails;
}

function isAllNailed(A, B, nails) {
  for (let i = 0; i < A.length; i++) {
    if (nails[A[i] - 1] === nails[B[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = solution;
