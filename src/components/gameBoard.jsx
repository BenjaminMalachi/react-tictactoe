import { useState } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Square from "./square";

export default function GameBoard({ boardState }) {
  return (
    <Flex
      width="100vw"
      height="100vh"
      align="center" // for vertical alignment
      justify="center" // fo
    >
      <Grid
        p={10}
        w={"680px"}
        h={"680px"}
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={20}
      >
        {boardState.map((cell, index) => {
          return <Square key={index} cell={cell} index={index} />;
        })}
      </Grid>
    </Flex>
  );
}
