import { Gameboard } from './gameboard';

const Player = (name, isAI) => {
  const gameboard = Gameboard();

  const attackEnemy = (enemyBoard, x, y) => {
    let row = x;
    let col = y;
    if (isAI === true) {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
      if (enemyBoard.board[row][col].cellHit === true) {
        while (enemyBoard.board[row][col].cellHit === true) {
          row = Math.floor(Math.random() * 10);
          col = Math.floor(Math.random() * 10);
          /* console.log(row);
          console.log(col); */
        }
      }
      enemyBoard.receiveAttack(row, col);
    } else {
      enemyBoard.receiveAttack(row, col);
    }
    return enemyBoard.board[row][col];
  };

  return { name, gameboard, attackEnemy };
};

// eslint-disable-next-line import/prefer-default-export
export { Player };
