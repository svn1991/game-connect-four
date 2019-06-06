
/**
 * Board Controls
 */
class Board {

  constructor(row, column) {
    this.board = [];
    this.availableSlots = []; 

    for (let i=0; i<row;i++) {
      this.board.push(new Array(column).fill(0));
    }

    for (let i=0; i<column;i++) {
      this.availableSlots.push([row-1, i]);
    }
  }

  /* TODO: When player selects column to drop token, reassign slot value to player token */

  /* TODO: update availableSlots after token drop */

  /* TODO: display board status(colorize) */
}

export default Board;