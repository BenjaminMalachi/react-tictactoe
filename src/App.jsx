import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { handleCellClick } from "./GameLogicV2.js";
import { Flex } from "@chakra-ui/react";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  //State
  const [boardState, setBoardState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [message, setMessage] = useState("TIC TAC TOE");
  const [turnCount, setTurnCount] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  //Event Handlers

  const handleClick = (value, index) => {
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
    console.log("Reset");
  };

  return (
    <>
      <Flex align="center" justify="center" h="100vh" w="100vw">
        <GameBoard
          message={message}
          boardState={boardState}
          handleClick={handleClick}
        />
        ;
      </Flex>
    </>
  );
}

export default App;
