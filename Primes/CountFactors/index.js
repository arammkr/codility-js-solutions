function solution(N) {
  var counter = 0;
  var limit = parseInt(Math.sqrt(N));

  for (var i = 1; i <= limit; i++) {
    if (N % i === 0) {
      counter++;
      var factor = N / i;
      if (factor !== i) {
        counter++;
      }
    }
  }

  return counter;
}

module.exports = solution;
