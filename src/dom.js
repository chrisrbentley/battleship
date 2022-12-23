const main = document.querySelector('main');

function renderBoards(player) {
  const boardContainer = document.createElement('div');
  boardContainer.className = 'board';
  if (player.isAI === true) {
    boardContainer.classList.add('cpu-board');
  } else {
    boardContainer.classList.add('player-board');
  }
  main.appendChild(boardContainer);
  for (let row = 0; row < player.gameboard.board.length; row += 1) {
    for (let col = 0; col < player.gameboard.board.length; col += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      if (player.isAI === true) {
        cell.classList.add('enemy-cell');
      } else {
        cell.classList.add('player-cell');
      }
      cell.dataset.row = row;
      cell.dataset.col = col;
      boardContainer.appendChild(cell);
    }
  }
}

function updateGrid(playerBoard, row, col, cell) {
  console.log(row, col);
  if (playerBoard.board[row][col].result === 'hit') {
    cell.classList.add('hit');
  } else {
    cell.classList.add('miss');
  }
}

// function winMessage(winner) {}

export { renderBoards, updateGrid };
