const main = document.querySelector('main');

const updateDOM = (player, row, col, cell) => {
  if (player.gameboard.board[row][col].result === 'miss') {
    cell.classList.add('miss');
  } else {
    cell.classList.add('hit');
  }
};

const handleInput = (cell, player, enemy) => {
  enemy.attackEnemy(
    player.gameboard,
    Number(cell.dataset.row),
    Number(cell.dataset.col),
    console.log(player.gameboard.board),
  );
  updateDOM(player, Number(cell.dataset.row), Number(cell.dataset.col), cell);
};

const renderBoard = (player, board, enemy) => {
  const boardContainer = document.createElement('div');
  boardContainer.className = 'board';
  main.appendChild(boardContainer);
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row].length; col += 1) {
      const cell = document.createElement('div');
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.className = 'cell';
      boardContainer.appendChild(cell);
      if (player.isAI === true) {
        cell.addEventListener(
          'click',
          () => {
            handleInput(cell, player, enemy);
          },
          { once: true },
        );
      }
    }
  }
};

export { renderBoard };
