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
      if (!this.checkFieldForMine(currentRow, currentColumn)) {
        this.putMine(currentRow,currentColumn);
        mineCounter++;
      }
    }
  }

  checkFieldForMine(currentRow, currentColumn) {
    return this.gameField[currentRow][currentColumn] === 'x';
  }

  findAdjacent(row, column) {
    let mineCounter = 0;
    const adjacents = [
      [row - 1, column - 1],
      [row - 1, column + 1],
      [row + 1, column + 1],
      [row + 1, column - 1],
      [row, column + 1],
      [row, column - 1],
      [row - 1, column],
      [row + 1, column],
    ];

    adjacents.forEach((adjacent) => {
      const currentRow = adjacent[0];
      const currentColumn = adjacent[1];
      if (currentRow <= 2 && currentColumn <= 2 && currentRow >= 0 && currentColumn >= 0 && this.gameField[currentRow][currentColumn] === 'x') {
        mineCounter += 1;
      }
    });

    return mineCounter;
  }

  getRandomNumberBetween(low, high) {
    return Math.floor(Math.random() * high) + low;
  }

  putMine(row, column) {
    this.gameField[row][column] = "x";
  }

}

module.exports = Main;
