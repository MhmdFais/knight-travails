const allowedMoves = [];

allMoves(allowedMoves);

function allMoves(allowedMoves) {
  for (let i = 0; i < 8; i++) {
    const colMoves = [];
    for (let j = 0; j < 8; j++) {
      const squareMoves = [];
      const col = i;
      const row = j;
      checkMove(squareMoves, col + 1, row + 2);
      checkMove(squareMoves, col + 2, row + 1);
      checkMove(squareMoves, col + 2, row - 1);
      checkMove(squareMoves, col + 1, row - 2);
      checkMove(squareMoves, col - 1, row - 2);
      checkMove(squareMoves, col - 2, row - 1);
      checkMove(squareMoves, col - 2, row + 1);
      checkMove(squareMoves, col - 1, row + 2);
      colMoves.push(squareMoves);
    }
    allowedMoves.push(colMoves);
  }
}

function checkMove(squareMoves, col, row) {
  if (col >= 0 && col < 8 && row >= 0 && row < 8) {
    squareMoves.push([col, row]);
  }
}

export { allowedMoves };
