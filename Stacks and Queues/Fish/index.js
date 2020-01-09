function solution(A, B) {
  const up = [];
  const down = [];

  for (let i = 0; i < B.length; i++) {
    if (B[i] === 0) {
      up.push(A[i]);
    } else {
      down.push(A[i]);
    }

    if (B[i] === 1 || down.length === 0) {
      continue;
    }
    
    while (down.length > 0) {
      const upFish = up.pop();
      const downFish = down.pop();

      if (downFish > upFish) {
        down.push(downFish);
        break;
      } else {
        up.push(upFish);
      }
    }
  }

  return up.length + down.length;
}

module.exports = solution;
