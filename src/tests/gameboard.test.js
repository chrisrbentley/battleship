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

/* test('receiveAttack() takes coordinates, checks if a ship was there and if so registers a hit', () => {
  expect(Gameboard().receiveAttack(0, 3)).toBe();
}); */
