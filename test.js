const Main = require('./index.js');
const lodash = require('lodash');

const printBoard = (board, message) => {
  const boardTemplate = `
    +-+-+-+
    |${board[0][0]}|${board[0][1]}|${board[0][2]}|
    +-+-+-+
    |${board[1][0]}|${board[1][1]}|${board[1][2]}|
    +-+-+-+
    |${board[2][0]}|${board[2][1]}|${board[2][2]}|
    +-+-+-+
    
    [Sandbox 3x3] ${message}
  `;

  console.log(boardTemplate);
};

describe('Board creation', function() {
  it('should create an empty board', function() {
    const main = new Main();
    const expected = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(lodash.isEqual(main.playerField, expected)).toBe(true);
    printBoard(main.playerField, 'Game created');
  });

  it('should be a 3x3 matrix', function() {
    const main = new Main();
    const is3x3Array = main.playerField.every(row => row.length === 3);
    expect(is3x3Array).toBe(true);
  });
});

describe('Board filling', function() {
  it('should contain mines', function() {
    const main = new Main();
    main.fillMines();
    const areThereMines = main.gameField.filter(row => row.includes('x')).length > 0;
    expect(areThereMines).toBe(true);
  });

  it('should contain 3 mines', function() {
    const main = new Main();
    main.fillMines();
    let mineCounter = 0;
    main.gameField.forEach(row => row.forEach(column => mineCounter += column === 'x'));
    expect(mineCounter).toBe(3);
  });

  it('should find adjacent', function() {
    const main = new Main();
    main.putMine(0, 1);
    main.putMine(1, 0);
    main.putMine(1, 1);
    expect(main.findAdjacent(0, 0)).toBe(3);
  });

});
