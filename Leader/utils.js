function findLeaderCandidate(arr) {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {

    if (stack.length === 0) {
      stack.push(arr[i]);
      continue;
    }
    const lastItem = stack.pop();
    if (lastItem === arr[i]) {
      stack.push(lastItem);
      stack.push(lastItem);
    }
  }

  if (stack.length === 0) {
    return null;
  }

  return stack[0];
}

function checkIsLeader(arr, leaderCandidate) {
  const half = parseInt(arr.length / 2);
  let counter = 0;
  for (const item of arr) {
    if (item === leaderCandidate) {
      counter++;
    }

    if (counter > half) {
      return true;
    }
  }

  return false;
}

module.exports = {
  findLeaderCandidate,
  checkIsLeader,
}