function solution(A) {
    const west = [];
    const east = [];
    const LIMIT = 1000000000;
    
    for (let i = 0; i < A.length; i++) {
        const iRev = A.length - 1 - i;
        
        if(A[i] === 0) {
            east[i] = east[i - 1] ? east[i - 1] + 1 : 1;
        } else {
            east[i] = east[i - 1] ? east[i - 1] : 0;
        }
        
        if (A[iRev] === 1) {
            west[iRev] = west[iRev + 1] ? west[iRev + 1] + 1 : 1;
        } else {
            west[iRev] = west[iRev + 1] ? west[iRev + 1] : 0;
        }
    }
    
    let lastEast = 0;
    let counter = 0;
    for (let i = 0; i < east.length; i++) {
        if (east[i] > lastEast) {
            lastEast = east[i];
            counter += west[i];
        }
        
        if (counter > LIMIT) {
            return -1;   
        }
    }
    
    return counter;
}

module.exports = solution;
