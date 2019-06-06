import Board from '../Board/Board';
class Game {
  constructor() {
    // toggle between player 1 and 2
    this.playerTurn = 1;
    
    this.board = this.initiateBoard(6, 7);
  }

  /* TODO: Initiate new board */
  initiateBoard(row, col) {
    const boardSetUp = new Board(row, col);
    return boardSetUp.board;
  }

  /* TODO: Initiate player 1 */

  /* TODO: Initiate player 2 */

  /* TODO: Alert player based on playerTurn */

  /* TODO: Get token, column drop and update board */

  /* TODO: Check win otherwise toggle player turn */

  /* TODO: WIN FUNCTION: Check if current player slots have a win  */
}

export default Game;