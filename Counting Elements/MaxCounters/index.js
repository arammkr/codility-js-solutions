function solution(N, A) {
    let max = 0;
    let min = 0;
    let result = new Array(N).fill(0);
    
    for (let i = 0; i < A.length; i++) {
        const op = A[i];
        
        if (op > N) {
            min = max;
        } else {
            result[op - 1] = Math.max(min, result[op - 1]);
            result[op - 1]++;
            max = Math.max(max, result[op - 1]);
        }
    }
    
    for (let i = 0; i < result.length; i++) {
        result[i] = Math.max(min, result[i]);
    }
    
    return result;
}

module.exports = solution;
