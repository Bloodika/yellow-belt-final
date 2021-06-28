class Main {
  playerField;
  gameField;


  constructor() {
    this.playerField = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.gameField = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  }

  fillMines() {
    let mineCounter = 0;
    while (mineCounter !== 3) {
      const currentRow = this.getRandomNumberBetween(0, 2);
      const currentColumn = this.getRandomNumberBetween(0, 2);
      if (this.gameField[currentRow][currentColumn] !== 'x') {
        this.gameField[currentRow][currentColumn] = 'x';
        mineCounter++;
      }
    }
  }

  getRandomNumberBetween(low, high) {
    return Math.floor(Math.random() * high) + low;
  }

}

module.exports = Main;
