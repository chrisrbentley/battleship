import { Gameboard } from './gameboard';

const Player = (name, isAI) => {
  const gameboard = Gameboard();
  let row;
  let col;

  const attackEnemy = (enemyBoard, x, y) => {
    row = x;
    col = y;

    console.log('attacking');

    if (isAI === true) {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
      if (enemyBoard.board[row][col].cellHit === true) {
        while (enemyBoard.board[row][col].cellHit === true) {
          row = Math.floor(Math.random() * 10);
          col = Math.floor(Math.random() * 10);
        }
      }
      enemyBoard.receiveAttack(row, col);
      console.log(row, col);
      console.log('AI is attacking');
    } else {
      enemyBoard.receiveAttack(row, col);
    }

    return enemyBoard.board[row][col];
  };

  return {
    name,
    gameboard,
    attackEnemy,
    isAI,
    get row() {
      return row;
    },
    get col() {
      return col;
    },
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Player };
