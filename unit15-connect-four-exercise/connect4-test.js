describe("tie() test", function() {
  beforeEach(() => {
    board = [
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
    ]
  });

  afterEach(() => {
    board = [
      [],
      [],
      [],
      [],
      [],
      [],
    ];
  });

  it('newBoard should have a length of 42', function() {
    newBoard = board.flat();
    expect(newBoard.length).toEqual(42);
  });

  it('tie() should create an alert of TIE!!', function() {
    const tie = (board) => {
    const newArray = board.flat();
      if (newArray.length === 42) {
        return ('TIE!!!');
      }
    };

    expect(tie(board)).toEqual('TIE!!!');
  });
});