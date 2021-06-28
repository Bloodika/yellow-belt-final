class Main {
  playerField;
  gameField;


  constructor() {
    this.playerField = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.gameField = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  }

  fillMines() {
    this.gameField[0][0] = "x";
  }
}

module.exports = Main;
