class Minesweeper {
  playerFields;
  gameField;


  constructor() {
    this.playerFields = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.gameField = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  }

  fillMines() {
    let mineCounter = 0;
    while (mineCounter !== 3) {
      const currentRow = this.getRandomNumberBetween(0, 2);
      const currentColumn = this.getRandomNumberBetween(0, 2);
      if (!this.checkFieldForMine(currentRow, currentColumn)) {
        this.putMine(currentRow, currentColumn);
        mineCounter++;
      }
    }
  }

  fillAdjacentMinesNumbers() {
    for (let row = 0; row < this.gameField.length; row++) {
      const currentRow = this.gameField[row];
      for (let column = 0; column < currentRow.length; column++) {
        if (!this.checkFieldForMine(row,column)) {
          this.gameField[row][column] = this.findAdjacent(row, column);
        }
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
    this.gameField[row][column] = 'x';
  }

  pickColumn(row, column) {
    this.playerFields[row][column] = this.gameField[row][column];
  }

  checkEnd() {
    return this.playerFields.filter((row) => row.includes('x')).length > 0;
  }
}

module.exports = Minesweeper;
