function solution(N) {

    const binnary = N.toString(2);
    let max = 0;
    let counter = 0;
    let startCount = false;
    
    for (const char of binnary) {
        if (char === '1' && startCount === false) {
            startCount = true;
        } 
        
        if (char === '0' && startCount) {
            counter++;
        }
        
        if (char === '1' && startCount === true ) {
            max = Math.max(max, counter);
            counter = 0;
        }
    }
    
    return max;
}

module.exports = solution;
