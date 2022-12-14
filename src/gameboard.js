import { Ship } from './ship';

const Gameboard = () => {
  function createArray(length) {
    const arr = new Array(length || 0);
    let i = length;

    if (arguments.length > 1) {
      const args = Array.prototype.slice.call(arguments, 1);
      while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr;
  }

  const board = createArray(10, 10);
  for (let i = 0; i < board.length; i += 1) {
    board[i].fill('');
  }

  const placeShip = (x, y, direction, length) => {
    const ship = Ship(length);
    board[x][y] = ship;

    if (length > 1) {
      let i = 1;
      let nextCell;
      if (direction === 'horizontal') {
        nextCell = y;
      } else if (direction === 'vertical') {
        nextCell = x;
      }
      while (i < length) {
        if (direction === 'horizontal') {
          nextCell += 1;
          board[x][nextCell] = ship;
          i += 1;
        } else if (direction === 'vertical') {
          nextCell += 1;
          board[nextCell][y] = ship;
          i += 1;
        }
      }
      i = 1;
    }

    return board[x][y];
  };

  const receiveAttack = (x, y) => {
    if (typeof board[x][y] !== 'object') {
      board[x][y] = 'miss';
    } else if (typeof board[x][y] === 'object') {
      return board[x][y].hit();
    }

    return board[x][y];
  };

  return { board, placeShip, receiveAttack };
};

const gameboard = Gameboard();

gameboard.placeShip(0, 0, 'vertical', 1);
gameboard.receiveAttack(0, 0);

console.log(gameboard.board);

// eslint-disable-next-line import/prefer-default-export
export { Gameboard, gameboard };
