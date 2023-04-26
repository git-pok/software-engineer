import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import _cloneDeep from "lodash/cloneDeep";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    const initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < nrows; i++) {
      initialBoard.push([ ]);
      for (let r = 0; r < ncols; r++) {
        const booLean = Math.floor(Math.random() * 10) < 3;
        initialBoard[i].push(booLean);
      }
    }
    
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    const boardVals = [];

    for (let arr of board) {
      for (let val of arr) {
        boardVals.push(val)
      }
    }
  
    return boardVals.every(value => value === false);
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      // TODO: Make a (deep) copy of the oldBoard
      const boardCopy = _cloneDeep(board);

      const bttmValExs = y < nrows - 1;
      const topValExs = y > 0;

      // TODO: in the copy, flip this cell and the cells around it
      // Flips true to false and false to true.
      const flipCtr = () => boardCopy[y][x] = !boardCopy[y][x];
      const flipRght = () => boardCopy[y][x + 1] = !boardCopy[y][x + 1];
      const flipLft = () => boardCopy[y][x - 1] = !boardCopy[y][x - 1];
      const flipBlw = () => boardCopy[y + 1][x] = !boardCopy[y + 1][x];
      const flipAbv = () => boardCopy[y - 1][x] = !boardCopy[y - 1][x];

      if (boardCopy[y][x] !== undefined) flipCtr();
      if (boardCopy[y][x + 1] !== undefined) flipRght();
      if (boardCopy[y][x - 1] !== undefined) flipLft();
      if (bttmValExs) flipBlw();
      if (topValExs) flipAbv();

      // TODO: return the copy
      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  const win = hasWon();
  // TODO

  // make table board
  return (
    <>
    { !win ?
      <table>
        <tbody>
            {
              board.map((arr, idx1) => (
                <tr id={idx1} key={idx1}>
                  {
                    arr.map((value, idx) => (
                      <Cell
                        isLit={value}
                        id={`${idx1}-${idx}`}
                        key={`${idx1}-${idx}`}
                        flipCellsAroundMe={flipCellsAround} />
                    ))
                  }
                </tr>
              ))
            }
        </tbody>
      </table>
      : 
      <h1>WINNER</h1>
    }
    </>
  )
}

export default Board;
