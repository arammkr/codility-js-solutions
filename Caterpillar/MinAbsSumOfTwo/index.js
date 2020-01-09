function solution(A) {
  let negative = [];
  let positive = [];

  if (A.length === 1) {
    return Math.abs(A[0]) * 2;
  }

  for (const item of A) {
    if (item === 0) {
      return 0;
    }

    if (item < 0) {
      negative.push(item);
    } else {
      positive.push(item);
    }
  }


  if (negative.length === 0) {
    positive.sort((a, b) => b - a);
    return positive[positive.length - 1] * 2;
  } else if (positive.length === 0) {
    negative.sort((a, b) => b - a);
    return Math.abs(negative[0]) * 2;
  } else {
    A.sort((a, b) => Math.abs(a) - Math.abs(b));

    let min = Math.abs(A[0] + A[1]);

    for (let i = 1; i < A.length - 1; i++) {
      min = Math.min(Math.abs(A[i] + A[i + 1]), min, Math.abs(A[i]) * 2, Math.abs(A[i + 1]) * 2);
    }

    return min;
  }
}

module.exports = solution;
