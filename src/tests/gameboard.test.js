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

describe('receiveAttack works hits a ship if cell has a ship, otherwise marks with an "x" ', () => {
  // maybe use mocks instead?

  const shipOne = Ship(1);
  gameboard.board[0][5] = shipOne;
  gameboard.receiveAttack(0, 6);

  test('if attacked cell does not have a ship, mark it with "miss" ', () => {
    expect(gameboard.board[0][6]).toBe('miss');
  });

  test('if cell has a ship, hit()', () => {
    expect(gameboard.board[0][5].hit());
  });
});
