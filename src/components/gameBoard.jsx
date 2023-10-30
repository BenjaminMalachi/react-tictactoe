import { useState } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Square from "./square";

export default function GameBoard({ boardState, handleClick }) {
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Grid
        p={10}
        w={"680px"}
        h={"680px"}
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={20}
      >
        {boardState.map((cell, index) => {
          return (
            <Square
              handleClick={handleClick}
              key={index}
              cell={cell}
              index={index}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}
