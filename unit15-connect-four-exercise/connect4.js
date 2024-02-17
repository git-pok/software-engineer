/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;
let hasWon;

let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */
const makeBoard = () => {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  const matrix = [];
  for (let i = 1; i <= WIDTH; i++) {
    matrix.push(null);
  }
  for (let i = 1; i <= HEIGHT; i++) {
    const matrixCpy = matrix.slice();
    board.push(matrixCpy);
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */
const makeHtmlBoard = () => {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  const htmlBoard = document.querySelector("#board");
  // TODO: add comment for this code
  /** top is a tr element for the table.
   * top gets and id and an event listener.
  * **/
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);
  /** 
   * Iterate WIDTH and create elements to
   * create HTML slots to click. These slots
   * are how pieces get dropped into game board.
  * **/
  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // TODO: add comment for this code
  /**
   * Iterate HEIGHT and create elements to
   * create HTML board under HTML slots.
  * **/
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */
const findSpotForCol = (x) => {
  // TODO: write the real version of this, rather than always returning 0
  let boardLgth = board.length - 1;
  while (boardLgth >= 0) {
    if (board[boardLgth][x] === null) return boardLgth;
    else if (boardLgth === 0 && board[boardLgth][x]) return 0;
    else boardLgth--;
  }
}

/** placeInTable: update DOM to place piece into HTML table of board */
const placeInTable = (y, x) => {
  // TODO: make a div and insert into correct table cell
  /**
  * Create div and set attributes.
  */
  const div = document.createElement("div");
  div.setAttribute("class", "piece");
  const plyrClsNum = currPlayer === 1 ? "p1" : "p2";
  div.classList.add(plyrClsNum);
  /**
  * Find Html td id to insert piece,
  * and append player piece div to it.
  */
  const emptyTdId = `${y}-${x}`;
  const htmlBoard = document.querySelector("#board");
  const trNodesArr = Array.from(htmlBoard.querySelectorAll("tr:not(#column-top)"));
  const emptyTdTr = Array.from(trNodesArr[y].childNodes);
  const emptyTdIdx = emptyTdTr.findIndex(td => td.id === emptyTdId);
  const emptyTd = emptyTdTr[emptyTdIdx];
  emptyTd.append(div);
}

/** endGame: announce game end */

const endGame = (msg) => {
  // TODO: pop up alert message
  alert(msg);
  const top = document.querySelector("#column-top");
  top.removeEventListener("click", handleClick);
}

/** handleClick: handle click of column top to play piece */
const handleClick = (evt) => {
  // get x from ID of clicked cell
  const x = +evt.target.id;
  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (!board[y][x]) {
    // if (y === null) {
    // return;
    // }

    // place piece in board and add to HTML table
    // TODO: add line to update in-memory board
    board[y][x] = currPlayer;
    placeInTable(y, x);
    // check for tie
    // TODO: check if all cells in board are filled; if so call, call endGame.
    const isTie = board.every(arr => arr.indexOf(null) === -1);
    if (isTie) return endGame(`Tie!`);
    // check for win
    if (checkForWin()) {
      return endGame(`Player ${currPlayer} won!`);
    } else {
      // switch players
      // TODO: switch currPlayer 1 <-> 2
      currPlayer = currPlayer === 1 ? 2 : 1;
    }
  } 
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

const checkForWin = () => {
  const _win = (cells) => {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer
    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.
  /**
   * Gathers coordinate indexes of potential
   * wins, and checks if coordinates
   * equal winning properties. 
  */
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
