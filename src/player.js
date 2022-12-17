import { Gameboard } from './gameboard';

const Player = (name) => {
  const gameboard = Gameboard();

  /* if (isHuman === true) {
  } */

  const attackEnemy = (enemyBoard, x, y) => {
    enemyBoard.receiveAttack(x, y);
    return enemyBoard.board[x][y];
  };

  return { name, gameboard, attackEnemy };
};

// eslint-disable-next-line import/prefer-default-export
export { Player };
