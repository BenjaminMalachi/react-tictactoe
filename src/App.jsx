import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Flex, Grid, GridItem } from "@chakra-ui/react";

function App() {
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
        <GridItem borderRadius="20px" w="100%" h="100%" bg="white" />
        <GridItem borderRadius="20px" w="100%" h="100%" bg="white" />
        <GridItem borderRadius="20px" w="100%" h="100%" bg="white" />
        <GridItem borderRadius="20px" w="100%" h="100%" bg="white" />
        <GridItem borderRadius="20px" w="100%" h="100%" bg="white" />
        <GridItem borderRadius="20px" w="100%" h="100%" bg="white" />
        <GridItem borderRadius="20px" w="100%" h="100%" bg="white" />
        <GridItem borderRadius="20px" w="100%" h="100%" bg="white" />
        <GridItem borderRadius="20px" w="100%" h="100%" bg="white" />
      </Grid>
    </Flex>
  );
}

export default App;
