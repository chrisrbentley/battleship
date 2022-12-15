/* eslint-disable */

import { Gameboard, gameboard } from '../gameboard';
import { Ship } from '../ship';

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
  const testShip = Ship(1);
  const mockPlaceShip = jest.fn();

  mockPlaceShip.mockReturnValue((gameboard.board[5][3].ship = testShip));

  test('should mark cell with cellHit: true ', () => {
    expect(gameboard.receiveAttack(5, 1)).toEqual(
      expect.objectContaining({
        cellHit: true,
      }),
    );
  });

  const testCellAttacked = {
    cellHit: true,
    ship: {
      hits: 0,
    },
  };

  test('should call hit() on ship if cell has a ship ', () => {
    expect(gameboard.receiveAttack(5, 3)).toMatchObject(testCellAttacked);
  });
});

// test('should report whether or not all ships are sunk.', () => {});
