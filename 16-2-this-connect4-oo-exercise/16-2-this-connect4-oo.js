/** Connect Four **/
class Player {
  constructor(color) {
    this.color = color;
  }
}

class Game {
  constructor(width, height) {
    this.WIDTH = width;
    this.HEIGHT = height;
    this.currPlayer = 1;
    this.board = [];
    this.isWinner = false;
    this.p1Color = "purple";
    this.p2Color = "black";
  }

  /** makeBoard: create in-JS board structure:
  *   board = array of rows, each row is array of cells  (board[y][x])
  */

  makeBoard() {
    for (let y = 0; y < this.HEIGHT; y++) {
      this.board.push(Array.from({ length: this.WIDTH }));
    }
  }

  /** makeHtmlBoard: make HTML table and row of column tops. */

  makeHtmlBoard() {
    const board = document.getElementById('board');

    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    top.addEventListener('click', this.handleClick.bind(this));

    for (let x = 0; x < this.WIDTH; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }

    board.append(top);

    // make main part of board
    for (let y = 0; y < this.HEIGHT; y++) {
      const row = document.createElement('tr');

      for (let x = 0; x < this.WIDTH; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }

      board.append(row);
    }
  }

  /** findSpotForCol: given column x, return top empty y (null if filled) */

  findSpotForCol(x) {
    for (let y = this.HEIGHT - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  /** placeInTable: update DOM to place piece into HTML table of board */

  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.classList.add(`p${this.currPlayer}`);
    piece.style.top = -50 * (y + 2);

    piece.style.backgroundColor = piece.className === "piece p1" ? this.p1Color : this.p2Color;

    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }

  /** endGame: announce game end */

  endGame(msg) {
    alert(msg);
  }

  /** handleClick: handle click of column top to play piece */

  handleClick(evt) {
    if (!this.isWinner) {
      // get x from ID of clicked cell
      const x = +evt.target.id;

      // get next spot in column (if none, ignore click)
      const y = this.findSpotForCol(x);
      if (y === null) {
        return;
      }

      // place piece in board and add to HTML table
      this.board[y][x] = this.currPlayer;
      this.placeInTable(y, x);
  
      // check for win
      if (this.checkForWin()) {
        return this.endGame(`Player ${this.currPlayer} won!`);
      }
  
      // check for tie
      if (this.board.every(row => row.every(cell => cell))) {
        return endGame('Tie!');
      }
    
      // switch players
      this.currPlayer = this.currPlayer === 1 ? 2 : 1;
    }
  }

  _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer
    // console.log("LINE 276 _win, this value", this);
    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < this.HEIGHT &&
        x >= 0 &&
        x < this.WIDTH &&
        this.board[y][x] === this.currPlayer
    );
  }
  /** checkForWin: check board cell-by-cell for "does a win start here?" */

  checkForWin() {
    for (let y = 0; y < this.HEIGHT; y++) {
      for (let x = 0; x < this.WIDTH; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

        // find winner (only checking each win-possibility as needed)
        const horizWin = this._win(horiz);
        const vertWin = this._win(vert);
        const diagDRWin = this._win(diagDR);
        const diagDLWin = this._win(diagDL);

        if (horizWin || vertWin || diagDRWin || diagDLWin) {
          this.isWinner = true;
          return true;
        }
      }
    }
  }

}

const startBtn = document.querySelector("#start-btn");
const p1Color = document.querySelector("#p1");
const p2Color = document.querySelector("#p2");

startBtn.addEventListener("click", (evt) => {
  const { status } = evt.target.dataset;
  if (status === "start") {
    const p1ColorVal = p1Color.value;
    const p2ColorVal = p2Color.value;
    const game = new Game(6, 7);
    const player1 = new Player (p1ColorVal);
    const player2 = new Player (p2ColorVal);
    if (player1.color) game.p1Color = player1.color;
    if (player2.color) game.p2Color = player2.color;
    game.makeBoard();
    game.makeHtmlBoard();
    evt.target.setAttribute("data-status", "reset");
  } else if (status === "reset") {
    const htmlGame = document.querySelector("#game");
    const htmlBoard = document.querySelector("#game #board");
    evt.target.setAttribute("data-status", "start");
    htmlBoard.remove();
    const table = document.createElement("table");
    table.setAttribute("id", "board");
    htmlGame.append(table);
  }
});
