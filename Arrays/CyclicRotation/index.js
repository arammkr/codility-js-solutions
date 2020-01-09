function solution(A, K) {
    if (A.length === K) {
        return A;
    }
    
    const move = K % A.length;
    const tail = A.splice(A.length - move, move);
    
    return [...tail, ...A];
}

module.exports = solution;