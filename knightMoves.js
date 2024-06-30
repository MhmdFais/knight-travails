import { allowedMoves } from "./allowedMoves";

export function knightMoves(startSquare, endSquare) {
  const path = search(startSquare[0], startSquare[1], endSquare, []);
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  for (let i = 0; i < path.length; i++) {
    console.log(path[i]);
  }
}
