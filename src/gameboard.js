/* eslint-disable no-continue */
import { Ship } from './ship';

const Gameboard = () => {
  let allSunk = false;

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

  const Cell = (cellHit, result, ship) => ({ cellHit, ship, result });

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      const cell = Cell(false, undefined);
      board[i][j] = cell;
    }
  }

  const placeShip = (x, y, direction, length) => {
    const ship = Ship(length);
    board[x][y].ship = ship;

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
          board[x][nextCell].ship = ship;
          i += 1;
        } else if (direction === 'vertical') {
          nextCell += 1;
          board[nextCell][y].ship = ship;
          i += 1;
        }
      }
      i = 1;
    }

    return board[x][y];
  };

  const allShipsSunk = () => {
    let counter = 0;
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
        if (typeof board[i][j].ship === 'object') {
          if (board[i][j].ship.sunk === true) {
            counter += 1;
            if (counter === 17) {
              allSunk = true;
              return allSunk;
            }
          } else break;
        } else continue;
      }
    }
    return allSunk;
  };

  const receiveAttack = (x, y) => {
    if (board[x][y].ship === undefined) {
      board[x][y].cellHit = true;
      board[x][y].result = 'miss';
      allShipsSunk();
    } else if (board[x][y].ship !== undefined) {
      board[x][y].cellHit = true;
      board[x][y].result = 'hit';
      board[x][y].ship.hit();
      allShipsSunk();

      return board[x][y];
    }
    // allShipsSunk();

    return board[x][y];
  };

  return {
    board,
    placeShip,
    receiveAttack,
    allShipsSunk, // maybe doesn't need to be exposed and can remove tests.
    get allSunk() {
      return allSunk;
    },
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Gameboard };
