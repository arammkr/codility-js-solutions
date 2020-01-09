function solution(S) {
  if (S.length === 0) return 1;
  
  const stack = [];
  for (const char of S) {
      
      if (stack.length === 0 || isOpeningChar(char)) {
          stack.push(char);
      } else {
          const lastChar = stack.pop();
          
          if (!checkChars(char, lastChar)) {
              return 0;
          }
      }
  }
  
  return stack.length === 0 ? 1 : 0;
}

function checkChars(char, lastChar){
  if (char === '}' && lastChar !== '{') {
      return false;
  }

  if (char === ']' && lastChar !== '[') {
      return false;
  }
  
  if (char === ')' && lastChar !== '(') {
      return false;
  }
  
  return true;
}

function isOpeningChar(char) {
  const openingChars = ['{', '[', '('];
  if (openingChars.indexOf(char) !== -1) {
      return true;
  }
}

module.exports = solution;
