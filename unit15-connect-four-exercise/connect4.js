/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  // sets array to a 6 dimensional array 
  for (let y = 0; y < HEIGHT; y++) {
    board.push(Array.from(WIDTH));
  }
  // checks if board is created
  // console.log(board);
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  const htmlBoard = document.querySelector('#board');
  // TODO: add comment for this code
  // creates the top most row where we drop pieces by clicking the squares
  let top = document.createElement("tr");
  // gives top most row where we drop pieces by clicking the squares, an id of column-top
  top.setAttribute("id", "column-top");
  // gives top most row where we drop pieces by clicking the squares, an event listener
  top.addEventListener("click", handleClick);
  // gives the top most row where we drop pieces, ids of their loop iteration index
  for (let x = 0; x < WIDTH; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  // appends the board tiles to top
  htmlBoard.append(top);

  // TODO: add comment for this code
  // loops over HEIGHT variable
  for (let y = 0; y < HEIGHT; y++) {
    // creates a row varaible, that is a table row element
    // creates one table row, then the loop below runs
    // when the loop below is done running, this runs again.
    // the loop below creates 7 table data elements for every one table row
    // this loop cycle repeats until the first loop has no more iterations to execute
    // creates 6 table rows total 
    const row = document.createElement("tr");
    // loops over WIDTH variable
    for (let x = 0; x < WIDTH; x++) {
      // creates a cell varaible, that is a table data element
      // creates table data elements for each td in each tr
      // creates 7 table data elements for every table row element
      const cell = document.createElement("td");
      // gives an id of y and x iterations, to each cell variable created for each array,
      cell.setAttribute("id", `${y}-${x}`);
      // appends the table data elements to their table row elements
      row.append(cell);
    }
    // appends each table row to htmlBoard
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  // this function places pieces from the bottom up, 
  // within each colum where the piece dropper is clicked
  for (let y = HEIGHT - 1; y >= 0; y--) {
    // if there is not a value, fill y with a value
    if (!board[y][x]) {
      // console.log('filled')
      // console.log(x, y)
      return y;
    }
  }
      return null;
  // return 0;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  const piece = document.createElement('div');
  piece.classList.add('piece');
  const spot = document.getElementById(`${y}-${x}`);
  
  spot.appendChild(piece);

  // toggles piece color for player1 and player2
  if (currPlayer === 2) {
    piece.classList.toggle('p2Piece');
  }
}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
  // I added a setTimeut method to the code below
  // if it gives errors, delete it from the function
  setTimeout(function() {
  alert(`Winner ${currPlayer}`);
  // resets game after a palyer wins
  location.reload();
  }, 500);
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;
  // console.log(x);

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);

  // makes the numbers that fill each array value when a piece is dropped
  board[y][x] = currPlayer;

  // check for win
  // I added a setTimeut method to the code below
  // it did not let the correct player appear in the winner message
  // I deleted it and added it to the actual message function
  // if (checkForWin()) {
  //   setTimeout(function() {
  //   return endGame(`Player ${currPlayer} won!`);
  //   }, 500);
  // }
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  // added a setTimeout to this function, delete it if an error occurs
  // added the reset function to this function within a setTimeout also
  // all the code was tested and runs correctly, but these setTimeouts are new
  let tie = (board) => {
    let newArray = board.flat();
      if (newArray.length === 42) {
        setTimeout(function() {
          return alert('TIE!!!');
        }, 500)

        setTimeout(function() {
          location.reload();
        }, 1000)
      }
  };

  tie(board)

  // switch players
  // TODO: switch currPlayer 1 <-> 2
  // if (currPlayer === 1) {
  //   currPlayer = 2;
  // } else {
  //   currPlayer = 1;
  // }
  
  // ternary operator version of switch players
  currPlayer === 1 ? currPlayer = 2 : currPlayer = 1  
  
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  // underscore does not have any functionality purposes
  // it hints code is happening internally
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer
    // checks if numbers and player pieces are valid
    // checks if player pieces belong to currPlayer
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
  // loops through HEIGHT
  // iterates once, then moves to the second loop
  // when the second loop is done, this loop iterates again
  // this cycle continues untill all iterations are complete
  for (let y = 0; y < HEIGHT; y++) {
    // loops through WIDTH
    // finishes its entire cycle for every iteration of the first loop
    for (let x = 0; x < WIDTH; x++) {
      // makes variables for piece matches
      // checks for patterns where currPlayer is consistent
      // Example, four instances of an x where y doesnt interrupt it
      // Example, horiz makes a horiontal path, 
      // _win(cell) will see if the path has 4 pieces in a row for one player   
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      // validates and checks for matches
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
