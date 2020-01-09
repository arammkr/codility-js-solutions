function solution(A) {
    const sumOfArray = A.reduce((acc, i) => acc + i, 0);
    const N = A.length + 1;
    const sumOfProgression = (N * (1 + N)) / 2;
    
    return sumOfProgression - sumOfArray;
}

module.exports = solution;
