/* eslint-disable */

import { Player } from '../player';

describe('Player can access enemy gameboard and attack it.', () => {
  test('should attack correct coords on enemy gameboard', () => {
    const playerOne = Player('One', false);
    const playerTwo = Player('Two', true);

    playerTwo.gameboard.placeShip(0, 0, 'vertical', 3);

    expect(playerOne.attackEnemy(playerTwo.gameboard, 0, 0)).toEqual(
      expect.objectContaining({
        cellHit: true,
        ship: expect.objectContaining({ hits: 1, sunk: false }),
      }),
    );
    expect(playerOne.attackEnemy(playerTwo.gameboard, 1, 0)).toEqual(
      expect.objectContaining({
        cellHit: true,
        ship: expect.objectContaining({ hits: 2, sunk: false }),
      }),
    );
    expect(playerOne.attackEnemy(playerTwo.gameboard, 2, 0)).toEqual(
      expect.objectContaining({
        cellHit: true,
        ship: expect.objectContaining({ hits: 3, sunk: true }),
      }),
    );
  });
});
