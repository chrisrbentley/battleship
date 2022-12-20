const main = document.querySelector('main');

const renderBoard = (board) => {
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
    }
  }
};

export { renderBoard };
