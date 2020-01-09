const LIMIT = 1000000000;
let total = 0;

function solution(A) {
  total = 0;  

  try {
    mergeSort(A);
  } catch (e) {

    console.error(e);
    return -1;
  }

  return total;
}

function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const mid = parseInt(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, mid);
  const right = unsortedArray.slice(mid);

  return merge(
    mergeSort(left),
    mergeSort(right),
  );;
}

function merge(left, right) {
  const res = [];
  let rightIndex = 0, leftIndex = 0;

  while (rightIndex < right.length && leftIndex < left.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex++
    } else {
      res.push(right[rightIndex]);
      rightIndex++;

      const restInLeft = left.length - leftIndex;
      total += restInLeft;

      if (total > LIMIT) {
        throw new Error('Limit exceeded');
      }
    }
  }

  return [...res, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

module.exports = solution;