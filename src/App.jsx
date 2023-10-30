import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GameLogic from "/GameLogic.js";

import { Flex, Grid, GridItem } from "@chakra-ui/react";
import GameBoard from "./components/GameBoard";

function App() {
  //State
  const [boardState, setBoardState] = useState([1, 2, 0, 0, 2, 1, 0, 0, 1]);
  const [message, setMessage] = useState("Welcome to Tic Tac Toe");
  const [turnCount, setTurnCount] = useState(0);

  //Event Handlers

  //When PLayer Clicks a grid
  // 1. Check if Game is active && 2. Check if Cell is already populated
  // 3. Set cell to currentplayer
  // 4. Run checkWinner function (end game if there is a winner)
  // 5. Run togglePLayer function (to pass turn to next player)

  //checkWinner function
  // populate list of possible winning combinations
  // Check if any of the winning combinations matches the current state
  // If all the squares are filled and do NOT match any of the combos, game ends in a draw

  return <GameBoard boardState={boardState} setBoardState={setBoardState} />;
}

export default App;
