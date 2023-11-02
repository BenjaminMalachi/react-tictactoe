import { useState } from "react";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import GameBoard from "./components/GameBoard.jsx";
import { handleCellClick, resetGame } from "./GameLogicV2.js";

function App() {
  //State
  const [boardState, setBoardState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [message, setMessage] = useState("TIC TAC TOE");
  const [turnCount, setTurnCount] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  //Event Handlers

  const handleClick = (value, index) => {

    if (winner) return;

    handleCellClick(
      boardState,
      index,
      currentPlayer,
      setCurrentPlayer,
      setBoardState,
      setWinner,
      setMessage
    );
  };

  const resetGameHandler = () => {
    resetGame(setCurrentPlayer, setBoardState, setWinner, setMessage);
  };

  return (
    <>
      <Flex align="center" justify="center" h="100vh" w="100vw">
        <GameBoard
          message={message}
          boardState={boardState}
          handleClick={handleClick}
          resetGame={resetGameHandler}
        />;
      </Flex>
    </>
  );
}

export default App;
