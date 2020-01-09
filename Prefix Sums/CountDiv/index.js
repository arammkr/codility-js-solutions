function solution(A, B, K) {
    
    if ( A > B || B < K) {
        // corner case
        if (B === 0) {
            return 1;
        }
        
        return 0;
    }
    
    let firstDivisible = null;
    
    for (let i = A; i <= B; i++) {
        if (i % K === 0) {
            firstDivisible = i;
            break;
        }   
    }
    
    if (firstDivisible === null) {
        return 0;
    }
    
    return parseInt((B - firstDivisible) / K) + 1
}

module.exports = solution;
