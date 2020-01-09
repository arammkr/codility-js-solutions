function solution(A) {

  if (A.length === 0) {
    return 0;
  }

  if (A.length === 1) {
    return Math.abs(A[0]);
  }

  const arr = A.map(i => Math.abs(i)).sort((a, b) => a - b);
  const sum = arr.reduce((acc, i) => acc + i, 0);
  const half = sum / 2;
  const maxArr = arr[arr.length - 1];
  let target = parseInt(half);

  if (maxArr >= target) {
    return Math.abs(sum - 2 * maxArr);
  }


  const count = new Array(maxArr + 1).fill(0);
  arr.forEach(i => count[i]++);
  let found = false;
  let seeking = half;
  let minDiff = +Infinity;
  let smallestIn = null;

  for (let i = maxArr; i >= 1; i--) {

    if (count[i] !== 0) {
      let tmpCount = JSON.parse(JSON.stringify(count));
      seeking = target - i;
      tmpCount[i]--;


      let j = Math.min(seeking, i);
      while (j >= 1 && seeking !== 0) {

        if (tmpCount[j] !== 0 && j <= seeking) {
          seeking -= j;
          tmpCount[j]--;
          minDiff = Math.min(minDiff, seeking);

          if (seeking === 0) {
            found = true;

            break;
          }

          if (tmpCount[j] === 0) j--;
        } else { j-- }
      }

      if (found) break;

      for (let k = 0; k < arr.length; k++) {
        if (tmpCount[arr[k]] !== 0) {
          smallestIn = arr[k];
          minDiff = Math.min(minDiff, seeking);
          break;
        }
      }
    }
  }

  if (found) {
    return sum % 2 === 0 ? 0 : 1
  }

  if (smallestIn && smallestIn - minDiff < minDiff) {
    minDiff = smallestIn - minDiff;
  }
  return sum - 2 * (target - minDiff);
}

module.exports = solution;
