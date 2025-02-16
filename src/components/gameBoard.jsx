import { useState } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Square from "./Square.jsx";

export default function GameBoard(props) {
  //To handle click
  // (cell, index) => {
  //   console.log(index);
  //   props.handleClick(index, cell);
  // }

  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Grid
        p={10}
        minW={"300px"}
        minH={"500px"}
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(5, 1fr)"
        gap={20}
      >
        <GridItem
          color={"black"}
          fontWeight={"bold"}
          fontSize={"30px"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          colSpan={3}
          rowSpan={1}
          borderRadius={20}
          bg="white"
        >
          {props.message}
        </GridItem>
        {props.boardState.map((cell, index) => {
          return (
            <Square
              handleClick={() => {
                props.handleClick(cell, index);
              }}
              key={index}
              cell={cell}
              index={index}
            />
          );
        })}
        <GridItem
          as="button"
          onClick={props.resetGame}
          color={"black"}
          fontWeight={"bold"}
          fontSize={"30px"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          colSpan={3}
          rowSpan={1}
          borderRadius={20}
          bg="white"
        >
          RESET
        </GridItem>
      </Grid>
    </Flex>
  );
}
