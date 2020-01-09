function solution(A) {
  let discs = A.map((radius, index) => ({
    start: index - radius,
    end: index + radius,
  }));

  discs.sort((a, b) => a.start - b.start);

  const LIMIT = 10000000;
  let intersections = 0;

  for (let i = 0; i < discs.length - 1; i++) {
    for (let j = i + 1; j < discs.length; j++) {
      if (discs[i].end >= discs[j].start) {
        intersections++;
      } else {
        break;
      }

      if (intersections > LIMIT) {
        return -1;
      }
    }
  }

  return intersections;
}

module.exports = solution;
