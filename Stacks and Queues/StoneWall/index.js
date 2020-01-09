function solution(H) {
  const blocks = [];
  let counter = 0;
  let height = 0;
  let i = 0;

  while (i < H.length) {
    if (H[i] > height) {
      blocks.push(H[i] - height);
      height = H[i];
      counter++;
      i++;
    } else if (H[i] < height) {
      height -= blocks.pop();
    } else {
      i++;
    }
  }

  return counter;
}

module.exports = solution;
