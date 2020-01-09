function solution(A) {
  if (A.length < 3) {
    return 0;
  }

  const peaks = findPeaks(A);

  if (peaks.length < 2) {
    return peaks.length;
  }

  const peaksCount = peaks.length;

  for (let i = parseInt(A.length / peaksCount); i <= A.length; i++) {
    if (A.length % i !== 0) {
      continue;
    }
    let minGroupSize = i;
    let minGroupCount = A.length / i;

    let lastGroup = 0;

    for (let peak of peaks) {
      if (parseInt(peak / minGroupSize) === lastGroup) {
        lastGroup++;
      }
    }

    if (lastGroup === minGroupCount) {
      return minGroupCount;
    }
  }

  return 0;
}

function findPeaks(A) {
  let peaks = [];
  for (let i = 1; i <= A.length - 2; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  return peaks;
}

module.exports = solution;
