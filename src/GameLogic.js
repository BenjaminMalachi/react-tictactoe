function squareClick {

    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer; // Use textContent to display 1 or 2
        cell.dataset.cell = currentPlayer;
        togglePlayer();
        checkWinner();
    }

}

function togglePlayer{

    currentPlayer = currentPlayer === '1' ? '2' : '1';

}

function checkWinner{

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            message.innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        }

    }

    if (!gameBoard.includes('0') && gameActive) {
        message.innerText = "It's a draw!";
        gameActive = false;
    }

}

function resetGame() {

    currentPlayer = '1';
    gameBoard = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
    gameActive = true;
    cells.forEach(cell => {
        cell.textContent = '0'; // Clear the cell content
        cell.dataset.cell = '0';
    });
    message.innerText = `Player ${currentPlayer}, it's your turn`;

}

export default GameLogic