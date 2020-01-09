const { gcd } = require('../utils');

function solution(A, B) {
    let count = 0;
    
    for (let i = 0; i < A.length; i++) {
        const big = Math.max(A[i], B[i]);
        const small = Math.min(A[i], B[i]);
        const div = gcd(big, small);
        
        if (big === small) {
            count++;   
        } else if (check(big, div) && check(small, div)) {
            count++;
        }
    }
    
    return count
}

function check(a, b) {
    let gcdA = gcd(a, b);
    
    if (a === b) {
        return true;
    } else if (gcdA === 1) {
        return false
    } else {
        a /= gcdA;
        gcdA = gcd(a, gcdA);
        return check(Math.max(a, gcdA), Math.min(a, gcdA));
    }
}

module.exports = solution;
