import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  handleCellClick,
  togglePlayer,
  checkWinner,
  resetGame,
} from "./GameLogic";

import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import GameBoard from "./components/GameBoard";

function App() {
  //State
  const [boardState, setBoardState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [message, setMessage] = useState("TIC TAC TOE");
  const [turnCount, setTurnCount] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  //Event Handlers

  // const handleClick = (index, value) => {
  //   console.log(index, value);

  //   //Check if square is empty
  // };

  const resetGameHandler = () => {
    console.log("Reset");
  };

  //When Player Clicks a grid
  const handleClick = (index, value) => {
    if (!boardState[index] && !winner) {
      const updatedBoard = handleCellClick(
        [...boardState],
        index,
        currentPlayer
      );
      setBoardState(updatedBoard);
      const newWinner = checkWinner(updatedBoard, currentPlayer);
      if (newWinner) {
        setWinner(newWinner);
      } else {
        togglePlayer(currentPlayer, setCurrentPlayer);
      }
    }
  };

  // const resetGameHandler = () => {
  //   resetGame(setCurrentPlayer, setBoardState, setWinner, setMessage);
  //   setMessage("Welcome to Tic Tac Toe");
  // };

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
