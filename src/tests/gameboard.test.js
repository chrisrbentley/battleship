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
  expect(Gameboard().placeShip(0, 0, 'horizontal', 3)).toEqual(
    expect.objectContaining({
      sunk: false,
    }),
  );
});

describe('receiveAttack works hits a ship if cell has a ship, otherwise marks with "miss". Then checks if all ships are sunk. ', () => {
  // maybe use mocks instead?

  const testShip = Ship(1);
  const mockPlaceShip = jest.fn();

  const attackedTestShip = {
    hits: 1,
    sunk: true,
  };

  mockPlaceShip.mockReturnValue((gameboard.board[5][3] = testShip));

  test('should hit an empty cell and mark it with "miss" ', () => {
    expect(gameboard.receiveAttack(5, 1)).toBe('miss');
  });

  test('should call hit() on ship if cell has a ship ', () => {
    expect(gameboard.receiveAttack(5, 3)).toMatchObject(attackedTestShip);
  });

  // test('should report whether or not all ships are sunk after attack.', () => {});
});
