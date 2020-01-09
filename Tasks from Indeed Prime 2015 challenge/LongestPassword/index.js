function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const pass = S.split(' ').sort((a, b) => b.length - a.length);
  for (let p of pass) {
    if (isValidPass(p)) {
      return p.length;
    }
  }

  return -1
}

function isValidPass(pass) {
  const regexLetterCount = /[A-z]/g;
  const regexDigitsCount = /[0-9]/g;
  const regexNonCount = /[^a-zA-Z0-9 :]/g;

  let resN = pass.match(regexNonCount);
  const countN = resN && resN.length || 0;

  if (countN > 0) {
    return false;
  }

  let resL = pass.match(regexLetterCount);
  const countL = resL && resL.length || 0;

  if (countL % 2 !== 0) {
    return false;
  }

  let resD = pass.match(regexDigitsCount);
  const countD = resD && resD.length || 0;

  if (countD % 2 !== 1) {
    return false;
  }

  return true;
}

module.exports = solution;