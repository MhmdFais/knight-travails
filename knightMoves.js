import { allowedMoves } from "./allowedMoves";

function knightMoves(startSquare, endSquare) {
  const path = search(startSquare[0], startSquare[1], endSquare, []);
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  for (let i = 0; i < path.length; i++) {
    console.log(path[i]);
  }
}

// This function is a modified version of the breadth-first search algorithm
// for finding the shortest path for the knight to move from two given squares.

function search(startCol, startRow, endSquare, path) {
  //   const queue = [];
  //   const visited = [];
  //   const parent = [];
  //   const moves = allowedMoves[startCol][startRow];
  //   queue.push([startCol, startRow]);
  //   visited.push([startCol, startRow]);
  //   parent.push(null);

  //   while (queue.length > 0) {
  //     const current = queue.shift();
  //     const col = current[0];
  //     const row = current[1];
  //     if (col === endSquare[0] && row === endSquare[1]) {
  //       return reconstructPath(parent, current);
  //     }
  //     const currentMoves = allowedMoves[col][row];
  //     for (let i = 0; i < currentMoves.length; i++) {
  //       const next = currentMoves[i];
  //       if (
  //         !visited.some(
  //           (square) => square[0] === next[0] && square[1] === next[1]
  //         )
  //       ) {
  //         queue.push(next);
  //         visited.push(next);
  //         parent.push(current);
  //       }
  //     }
  //   }

  const queue = [];
  const visited = new Set();
  const parent = new Map();

  queue.push([startCol, startRow]);
  visited.add(`${startCol},${startRow}`);
  parent.set(`${startCol},${startRow}`, null);

  while (queue.length > 0) {
    const [col, row] = queue.shift();

    if (col === endSquare[0] && row === endSquare[1]) {
      return reconstructPath(parent, endSquare);
    }

    const currentMoves = allowedMoves[col][row];
    for (let i = 0; i < currentMoves.length; i++) {
      const [nextCol, nextRow] = currentMoves[i];
      const nextKey = `${nextCol},${nextRow}`;

      if (!visited.has(nextKey)) {
        queue.push([nextCol, nextRow]);
        visited.add(nextKey);
        parent.set(nextKey, [col, row]);
      }
    }
  }

  return [];
}

function reconstructPath(parent, endSquare) {
  const path = [];
  let current = `${endSquare[0]},${endSquare[1]}`;

  while (current !== null) {
    const [col, row] = current.split(",").map(Number);
    path.push([col, row]);
    current = parent.get(current);
  }

  return path.reverse();
}

knightMoves([3, 3], [4, 3]);
