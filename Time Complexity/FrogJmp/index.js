function solution(X, Y, D) {
    const distance = Y - X;
    
    if (distance <= 0) {
        return 0;
    }
    
    if (distance <= D) {
        return 1;
    }
    
    if (distance % D === 0) {
        return distance / D;
    }
    
    return parseInt(distance / D) + 1;
}

module.exports = solution;
