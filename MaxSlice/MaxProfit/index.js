function solution(A) {
  const buy = [];
  const sell = [];
  
  buy[0] = A[0];
  sell[A.length - 1] = A[A.length - 1]
  
  for (let i = 1; i < A.length; i++) {
      const iRev = A.length - i - 1;
      buy[i] = Math.min(buy[i-1], A[i]);
      sell[iRev] = Math.max(sell[iRev + 1], A[iRev]);
      
  }
  
  let profit = 0;
  for (let i = 0; i < sell.length; i++) {
      profit = Math.max(profit, sell[i] - buy[i]);
  }
  
  return profit;
}

module.exports = solution;
