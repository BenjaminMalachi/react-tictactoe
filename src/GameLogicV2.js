export function handleCellClick(
    boardState,
    index,
    currentPlayer,
    setCurrentPlayer,
    setBoardState,
    setWinner,
    setMessage  
  ) {
    if (boardState[index] === 0) {
      const updatedBoard = [...boardState];
      updatedBoard[index] = currentPlayer;
      setBoardState(updatedBoard);
      const newWinner = checkWinner(updatedBoard, currentPlayer, setMessage);
      if (newWinner) {
        setWinner(newWinner);
        setMessage(`${newWinner}`);
      } else {
        togglePlayer(currentPlayer, setCurrentPlayer, setMessage);
      }
      if (!boardState.includes(0)) {
        setMessage("It's a draw!");
        return null;
      }
    
      return null;
    }
  }


export function togglePlayer(currentPlayer, setCurrentPlayer, setMessage) {
    const newPlayer = currentPlayer === 1 ? 2 : 1;
    setCurrentPlayer(newPlayer);
    setMessage(`Player ${newPlayer} is your turn!`);
}

export function checkWinner(boardState, currentPlayer, setMessage) {

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
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            setMessage(`Player ${currentPlayer} wins!`);
            return `Player ${currentPlayer} wins!`;
        }

    }

    if (!boardState.includes(0)) {
        setMessage("It's a draw!");
    }

    return null;

}


export function resetGame(setCurrentPlayer, setBoardState, setWinner, setMessage) {
    setCurrentPlayer(1);
    setBoardState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setWinner(null);
    setMessage(`Player 1, it's your turn`);
}
