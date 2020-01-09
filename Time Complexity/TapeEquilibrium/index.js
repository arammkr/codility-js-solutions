function solution(A) {
    const prefix = [];
    const sufix = [];
    
    for (let i = 0; i < A.length; i++) {
        const iRev = A.length - i - 1;
        prefix[i] = prefix[i - 1] ? A[i] + prefix[i - 1] : A[i];
        sufix[iRev] = sufix[iRev + 1] ? A[iRev] + sufix[iRev + 1] : A[iRev];
    }
    
    let diff = Infinity;
    
    for (let i = 0; i < A.length - 1; i++) {
        const cDiff = Math.abs(prefix[i] - sufix[i + 1]);
        
        diff = Math.min(cDiff, diff);       
    }
    
    return diff;
}

module.exports = solution;
