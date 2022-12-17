/* eslint-disable */

import { Gameboard } from '../gameboard';

test('should create 2D array', () => {
  expect(Gameboard().board).toHaveLength(10);
  expect(Gameboard().board[0]).toHaveLength(10);
  expect(Gameboard().board[4]).toHaveLength(10);
  expect(Gameboard().board[9]).toHaveLength(10);
});

test('gameboard can place ship at specific coordinates by calling Ship()', () => {
  const expected = {
    cellHit: false,
    ship: {
      hits: 0,
    },
  };

  expect(Gameboard().placeShip(0, 0, 'horizontal', 1)).toMatchObject(expected);
});

describe('receiveAttack works hits a ship if cell has a ship, otherwise marks with "miss". Then checks if all ships are sunk. ', () => {
  const testBoard = Gameboard();
  testBoard.placeShip(5, 3, 'vertical', 1);

  test('should mark cell with cellHit: true ', () => {
    expect(testBoard.receiveAttack(5, 1)).toEqual(
      expect.objectContaining({
        cellHit: true,
      }),
    );
  });

  const testCellAttacked = {
    cellHit: true,
    ship: {}, // specify hits: 1
  };

  test('should call hit() on ship if cell has a ship ', () => {
    expect(testBoard.receiveAttack(5, 3)).toMatchObject(testCellAttacked);
  });
}); ///

describe('If all ships are sunk return true, otherwise return false', () => {
  test('return true if all ships are sunken', () => {
    const myTestBoard = Gameboard();

    myTestBoard.placeShip(0, 0, 'horizontal', 5);
    myTestBoard.placeShip(3, 0, 'horizontal', 4);
    myTestBoard.placeShip(4, 0, 'vertical', 3);
    myTestBoard.placeShip(4, 3, 'vertical', 3);
    myTestBoard.placeShip(8, 2, 'horizontal', 2);

    myTestBoard.receiveAttack(0, 0);
    myTestBoard.receiveAttack(0, 1);
    myTestBoard.receiveAttack(0, 2);
    myTestBoard.receiveAttack(0, 3);
    myTestBoard.receiveAttack(0, 4);

    myTestBoard.receiveAttack(3, 0);
    myTestBoard.receiveAttack(3, 1);
    myTestBoard.receiveAttack(3, 2);
    myTestBoard.receiveAttack(3, 3);

    myTestBoard.receiveAttack(4, 0);
    myTestBoard.receiveAttack(5, 0);
    myTestBoard.receiveAttack(6, 0);

    myTestBoard.receiveAttack(4, 3);
    myTestBoard.receiveAttack(5, 3);
    myTestBoard.receiveAttack(6, 3);

    myTestBoard.receiveAttack(8, 2);
    myTestBoard.receiveAttack(8, 3);

    expect(myTestBoard.allShipsSunk()).toBeTruthy();
  });

  test('should only sink two ships, so allSunk() should return false', () => {
    const myTestBoard = Gameboard();

    myTestBoard.placeShip(0, 0, 'horizontal', 5);
    myTestBoard.placeShip(3, 0, 'horizontal', 4);
    myTestBoard.placeShip(4, 0, 'vertical', 3);
    myTestBoard.placeShip(4, 3, 'vertical', 3);
    myTestBoard.placeShip(8, 2, 'horizontal', 2);

    myTestBoard.receiveAttack(0, 0);
    myTestBoard.receiveAttack(0, 1);
    myTestBoard.receiveAttack(0, 2);
    myTestBoard.receiveAttack(0, 3);
    myTestBoard.receiveAttack(0, 4);

    myTestBoard.receiveAttack(3, 0);
    myTestBoard.receiveAttack(3, 1);
    myTestBoard.receiveAttack(3, 2);
    myTestBoard.receiveAttack(3, 3);

    expect(myTestBoard.allShipsSunk()).toBeFalsy();
  });
});
