const { findLeaderCandidate, checkIsLeader } = require('../utils');

function solution(A) {
  if (A.length < 2) {
    return 0;
  }

  const leader = findLeaderCandidate(A);

  if (leader === null || !checkIsLeader(A, leader)) {
    return 0;
  }

  let sum = [];
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === leader) {
      count++;
    }

    sum.push(count);
  }

  let result = 0;
  let maxLeaderOccurance = sum[sum.length - 1];

  for (let i = 0; i < sum.length; i++) {
    const left = parseInt((i + 1) / 2);
    const right = parseInt((sum.length - i - 1) / 2);

    if (sum[i] > left && (maxLeaderOccurance - sum[i]) > right) {
      result++;
    }
  }

  return result;
}

module.exports = solution;