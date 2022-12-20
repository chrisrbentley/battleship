import { renderBoard } from './dom';
import { Player } from './player';

const Game = (playerName) => {
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

  renderBoard(playerOne, playerOne.gameboard.board, computer);
  renderBoard(computer, computer.gameboard.board, playerOne);

  console.log(playerOne, computer);
};

const start = document.querySelector('#start');
const nameInput = document.querySelector('#name');
start.addEventListener('click', (e) => {
  const name = nameInput.value;
  // const game = Game(name);
  Game(name);
  start.remove();
  nameInput.remove();
  e.preventDefault();
});

// eslint-disable-next-line import/prefer-default-export
export { Game };
