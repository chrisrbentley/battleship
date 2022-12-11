/* eslint-disable */

import { Gameboard } from '../gameboard';

test('should create 2D array', () => {
  expect(Gameboard().board).toHaveLength(10);
  expect(Gameboard().board[0]).toHaveLength(10);
  expect(Gameboard().board[4]).toHaveLength(10);
  expect(Gameboard().board[9]).toHaveLength(10);
});
