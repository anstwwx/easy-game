const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function handleClick(event) {
  const index = event.target.getAttribute('data-cell-index');
  if (gameBoard[index] !== '' || gameOver) return;

  gameBoard[index] = currentPlayer;
  event.target.textContent = currentPlayer;

  if (checkWinner(currentPlayer)) {
    setTimeout(() => alert(`${currentPlayer} виграв!`), 100);
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner(player) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // горизонтальні
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // вертикальні
    [0, 4, 8], [2, 4, 6] // діагоналі
  ];

  return winPatterns.some(pattern => {
    return pattern.every(index => gameBoard[index] === player);
  });
}

function restartGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  gameOver = false;
}

cells.forEach(cell => cell.addEventListener('click', handleClick));

document.getElementById('restartButton').addEventListener('click', restartGame);