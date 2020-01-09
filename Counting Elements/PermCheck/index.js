function solution(A) {
    let max = Math.max.apply(null, A);
    const controller = new Array(A.length).fill(0);
    
    if (max !== A.length) {
        return 0;
    }
    
    for (let i of A) {
        if (controller[i] > 0) {
            return 0
        }
        
        controller[i]++;
        max--;
    }
    
    return max === 0 ? 1 : 0;
}

//second solution with set
function solution2(A) {
    
    const setA = new Set();
    let max = 0;
    for (let item of A) {
        max = Math.max(max, item);
        setA.add(item);
    }
    
    if (A.length !== max || setA.size !== max) {
        return 0
    }
    
    return 1;
}

module.exports = solution;
