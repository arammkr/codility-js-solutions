function solution(K, M, A) {
  let max = A.reduce((acc, i) => acc + i, 0);
  let min = Math.max.apply(null, A);
  let mid = 0;

  if (K === 1) {
    return max;
  }

  if (K >= A.length) {
    return min;
  }

  while (min <= max) {
    let temp = mid;
    mid = parseInt((max + min) / 2);

    if (mid === temp) {
      break;
    }

    const blocks = blocksCount(A, mid);

    if (blocks > K) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }

  return max;
}

function blocksCount(arr, maxValue) {
  let count = 1;
  let sum = 0;

  for (let item of arr) {
    if (sum + item > maxValue) {
      sum = item;
      count++;
    } else {
      sum += item;
    }
  }

  return count;
}

module.exports = solution;