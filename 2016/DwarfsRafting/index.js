function solution(N, S, T) {
  // write your code in JavaScript (Node.js 8.9.4)
  const quadSize = Math.pow(N/2, 2);
  const quads = [];
  for (let i = 1; i <= 4; i++) {
      const cords = getQuadCords(i, N);
      quads.push(new Quad(quadSize, cords));
  }
  
  const bounds = parseCords(S);
  const dwarfs = parseCords(T);
  
  bounds.forEach(bound => {
      quads.forEach(quad => {
          if (quad.cords[bound]) {
              quad.subSize();
          }
      });
  });
  
  dwarfs.forEach(dwarf => {
      quads.forEach(quad => {
          if (quad.cords[dwarf]) {
              quad.addDworf();
          }
      });
  });
  
  const horizontalMax = Math.min(
      quads[0].getSize() + quads[1].getSize(),
      quads[2].getSize() + quads[3].getSize(),
  )
  
  const verticalMax = Math.min(
      quads[0].getSize() + quads[2].getSize(),
      quads[1].getSize() + quads[3].getSize(),
  )
  
  if (!isPossible(quads)) {
      return -1;
  }
  
  const max = Math.min(horizontalMax, verticalMax);
  const dworfCount = quads.reduce((acc, quad) => acc + quad.dworfCount, 0);
  
  return 2 * max - dworfCount;
}

function isPossible(quads) {
  if (quads[0].getSize() < quads[3].dworfCount || quads[3].getSize() < quads[0].dworfCount ) {
      return false;
  }
  
  if (quads[1].getSize() < quads[2].dworfCount || quads[2].getSize() < quads[1].dworfCount ) {
      return false;
  }
  
  return true;
}

function getQuadCords(idx, N) {
  const quadEdgeSize = N / 2;
  const indexStart = {
      '1': { i: 1, j: 1},
      '2': { i: 1, j: quadEdgeSize + 1},
      '3': { i: quadEdgeSize + 1, j: 1},
      '4': { i: quadEdgeSize + 1, j: quadEdgeSize + 1},
  }
  
  const cIndex = indexStart[idx];
  const bounds = {};
  for (let i = cIndex.i; i <= cIndex.i - 1 + quadEdgeSize; i++) {
      for (let j = cIndex.j; j <= cIndex.j - 1 + quadEdgeSize; j++) {
          bounds[i + ':' + j] = true;
      }
  }
  
  return bounds;
}

function parseCords(str) {
  const res = [];
  
  if (!str) {
      return res;
  }
  
  const cords = str.split(' ');
  for (let cord of cords) {
      res.push(cord.charAt(0) + ':' + colToNum(cord.charAt(1)) );
  }
  
  return res;
}

function colToNum(char) {
  return char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;   
}

function Quad(availableSize, cords  ) {
  this.n = availableSize;
  this.s = availableSize;
  this.dworfCount = 0;
  this.cords = cords;
}

Quad.prototype.subSize = function() {
  this.s--;   
}

Quad.prototype.addDworf = function() {
  this.dworfCount++;   
}

Quad.prototype.getSize = function() {
  return this.s;   
}

module.exports = solution;