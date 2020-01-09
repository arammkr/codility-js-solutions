function solution(A, X) {
  const LIMIT = 1000000000;
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length < 4) return 0;

  const map = {};

  A.forEach(i => !map[i] ? map[i] = 1 : map[i]++);

  let res = 0;
  const fences = Object.keys(map).filter(item => {
    if (map[item] < 2) {
      return false;
    }

    if (map[item] < 4) {
      return true;
    } else {
      if (Number(item) * Number(item) >= X) {
        res++;
      }
      return true;
    }
  }).map(i => parseInt(i)).sort((a, b) => a - b)

  for (let i = 0; i < fences.length - 1; i++) {
    const index = binarySearch(fences[i], X, fences, i + 1);
    res += fences.length - index - 1;

    if (res > LIMIT) {
      return -1;
    }
  }

  return res;
}

function binarySearch(item, square, arr, s = 0) {

  let start = s;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = parseInt((end + start) / 2);
    const value = item * arr[mid];
    if (value >= square) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

module.exports = solution;
