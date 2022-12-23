import { renderBoards, updateGrid } from './dom';
import { Player } from './player';

function game(playerName) {
  const playerOne = Player(playerName, false);
  const computer = Player('Computer', true);

  playerOne.gameboard.placeShip(0, 0, 'horizontal', 5);
  playerOne.gameboard.placeShip(3, 3, 'horizontal', 4);
  playerOne.gameboard.placeShip(7, 0, 'vertical', 3);
  playerOne.gameboard.placeShip(5, 8, 'vertical', 3);
  playerOne.gameboard.placeShip(7, 4, 'vertical', 2);

  computer.gameboard.placeShip(0, 0, 'horizontal', 5);
  computer.gameboard.placeShip(3, 3, 'horizontal', 4);
  computer.gameboard.placeShip(7, 0, 'vertical', 3);
  computer.gameboard.placeShip(5, 8, 'vertical', 3);
  computer.gameboard.placeShip(7, 4, 'vertical', 2);

  renderBoards(playerOne);
  renderBoards(computer);

  const cpuCells = document.querySelectorAll('.enemy-cell');

  cpuCells.forEach((cell) => {
    cell.addEventListener(
      'click',
      () => {
        playerOne.attackEnemy(
          computer.gameboard,
          Number(cell.dataset.row),
          Number(cell.dataset.col),
        );
        updateGrid(
          computer.gameboard,
          Number(cell.dataset.row),
          Number(cell.dataset.col),
          cell,
          true,
        );
        console.log(computer.gameboard.allSunk);
        if (computer.gameboard.allSunk === false) {
          computer.attackEnemy(playerOne.gameboard);
          console.log(computer.row, computer.col);
          const playerCell = document.querySelector(
            `.player-cell[data-row="${computer.row}"][data-col="${computer.col}"]`,
          );
          console.log(playerCell);

          updateGrid(
            playerOne.gameboard,
            computer.row,
            computer.col,
            playerCell,
          );
        } else {
          console.log('Game over');
        }
      },
      { once: true },
    );
  });

  console.log(playerOne, computer);
}

// eslint-disable-next-line import/prefer-default-export
export { game };
