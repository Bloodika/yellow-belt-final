const Minesweeper = require('./index.js');
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

describe('Minesweeper game tests', function() {

  describe('Board creation', function() {
    it('should create an empty board', function() {
      const mineSweeper = new Minesweeper();
      const expected = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
      expect(lodash.isEqual(mineSweeper.playerFields, expected)).toBe(true);
      printBoard(mineSweeper.playerFields, 'Game created');
    });

    it('should be a 3x3 matrix', function() {
      const mineSweeper = new Minesweeper();
      const is3x3Array = mineSweeper.playerFields.every(row => row.length === 3);
      expect(is3x3Array).toBe(true);
    });
  });

  describe('Board filling', function() {
    it('should contain mines', function() {
      const mineSweeper = new Minesweeper();
      mineSweeper.fillMines();
      const areThereMines = mineSweeper.gameField.filter(row => row.includes('x')).length > 0;
      expect(areThereMines).toBe(true);
    });

    it('should contain 3 mines', function() {
      const mineSweeper = new Minesweeper();
      mineSweeper.fillMines();
      let mineCounter = 0;
      mineSweeper.gameField.forEach(row => row.forEach(column => mineCounter += column === 'x'));
      expect(mineCounter).toBe(3);
    });

    it('should find adjacent', function() {
      const mineSweeper = new Minesweeper();
      mineSweeper.putMine(0, 1);
      mineSweeper.putMine(1, 0);
      mineSweeper.putMine(1, 1);
      expect(mineSweeper.findAdjacent(0, 0)).toBe(3);
    });

    it('should fill the board with adjacent mine numbers', function() {
      const mineSweeper = new Minesweeper();
      mineSweeper.fillMines();
      mineSweeper.fillAdjacentMinesNumbers();
      let areThereNumbers = 0;
      mineSweeper.gameField.forEach(row => row.forEach(column => areThereNumbers += Number.isInteger(column)));
      expect(areThereNumbers).toBe(6);
    });

  });

  describe('Playing the game', function() {

    it('should pick the column I chose', function() {
      const mineSweeper = new Minesweeper();
      mineSweeper.fillMines();
      mineSweeper.fillAdjacentMinesNumbers();
      mineSweeper.pickColumn(0, 0);
      expect(mineSweeper.gameField[0][0] === mineSweeper.playerFields[0][0]).toBe(true);
    });


    it('should lose the game', function() {
      const mineSweeper = new Minesweeper();
      mineSweeper.putMine(1, 1);
      mineSweeper.pickColumn(1, 1);
      expect(mineSweeper.checkEnd()).toBe(true);
      printBoard(mineSweeper.playerFields, 'BOOM! - Game Over.');
    });


    it('shouldn\'t lose the game on clean column', function() {
      const mineSweeper = new Minesweeper();
      mineSweeper.putMine(1, 0);
      mineSweeper.putMine(1, 1);
      mineSweeper.putMine(2, 1);
      mineSweeper.gameField[2][0] = 3;
      mineSweeper.pickColumn(2, 0);
      expect(mineSweeper.checkEnd()).toBe(false);
      printBoard(mineSweeper.playerFields, `${mineSweeper.findAdjacent(2, 0)} bombs around your square`);
    });

    it('should win the game', function() {
      const mineSweeper = new Minesweeper();
      expect(mineSweeper.checkEnd()).toBe(false);
    });

    it('should be able to mark columns on the board', function() {
      const mineSweeper = new Minesweeper();
      mineSweeper.putMark(1, 0);
      mineSweeper.putMark(1, 1);
      mineSweeper.putMark(2, 1);
      mineSweeper.gameField[2][0] = 3;
      mineSweeper.pickColumn(2, 0);
      expect(mineSweeper.playerFields[1][0]).toBe('*');
      printBoard(mineSweeper.playerFields, 'Square flagged as bomb.');
    });

  });
});
