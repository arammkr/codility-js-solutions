/**
 * we need to count only avg of two and three length slices because of any other bigger slices are 
 * product of them. 
 */

function solution(A) {
    let minAvgTwo = null;
    let minAvgThree = null;
    let avg = Infinity;
    let index = -1;
    
    for (let i = 1; i < A.length; i++) {
        minAvgTwo = (A[i] + A[i - 1]) / 2;
        if (minAvgTwo < avg) {
            avg = minAvgTwo;
            index = i - 1;
        }
        
        if (i > 1) {
            minAvgThree = (A[i] + A[i - 1] + A[i - 2]) / 3
            if (minAvgThree < avg) {
                avg = minAvgThree;
                index = i - 2;
            }
        }
    }
    
    return index;
}

module.exports = solution;
