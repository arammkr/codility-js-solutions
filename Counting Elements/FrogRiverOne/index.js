function solution(X, A) {
    const leaves = [];
    for (let i = 0; i < A.length; i++) {
        if (!leaves[A[i]]) leaves[A[i]] = i;
    }
    
    if (leaves.length <= X) {
        return -1;
    }
    
    let max = -1;
    for (let i = 1; i <= X; i++) {
        if (leaves[i] === undefined) {
            return -1
        } else {
            max = Math.max(leaves[i], max);
        }
    }
    
    return max;
}

module.exports = solution;
