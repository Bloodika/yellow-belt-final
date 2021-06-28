const Main = require('./index.js');
const lodash = require('lodash');

const printBoard = (board,message) => {
  const boardTemplate = `
    +-+-+-+
    |${board[0][0]}|${board[0][1]}|${board[0][2]}|
    +-+-+-+
    |${board[1][0]}|${board[1][1]}|${board[1][2]}|
    +-+-+-+
    |${board[2][0]}|${board[2][1]}|${board[2][2]}|
    +-+-+-+
    
    [Sandbox 3x3] ${message}
  `

  console.log(boardTemplate);
}

describe('Board creation', function() {
  it('should create an empty board', function() {
    const main = new Main();
    const expected = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(lodash.isEqual(main.playerField, expected)).toBe(true);
    printBoard(main.playerField, "Game created")
  });

  it('should be a 3x3 matrix', function() {
    const main = new Main();
    const is3x3Array = main.playerField.every(row => row.length === 3);
    expect(is3x3Array).toBe(true);
  });
});
