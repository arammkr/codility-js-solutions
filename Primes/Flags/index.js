function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 3) {
    return 0;
  }
  const peaks = findPeaks(A);

  if (peaks.length < 2) {
    return peaks.length;
  }


  let maxPeaksCount = parseInt(Math.sqrt(A.length)) + 1;
  maxPeaksCount = Math.min(peaks.length, maxPeaksCount);

  for (let i = maxPeaksCount; i > 0; i--) {
    if (check(peaks, i)) {
      return i;
    }
  }

  return 0;
}

function findPeaks(A) {
  let peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  return peaks;
}

function check(peaks, maxCount) {

  let counter = 1;
  let start = 0;
  let end = 1;

  while (end < peaks.length) {
    if (peaks[end] - peaks[start] < maxCount) {
      end++;
    } else {
      start = end;
      end = start + 1;
      counter++
    }
  }

  return counter >= maxCount;
}

module.exports = solution;
