import { useState } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

const crossImageURL = "src/assets/img/cross.svg";
const circleImageURL = "src/assets/img/circle.svg";

export default function Square(props) {
  const renderImage = () => {
    if (props.cell === 1) {
      return <img src={crossImageURL} alt="Cross" />;
    } else if (props.cell === 2) {
      return <img src={circleImageURL} alt="Circle" />;
    } else {
      return <></>;
    }
  };

  return (
    <GridItem borderRadius="20px" w="100%" h="100%" bg="white">
      <Flex align="center" justify="center" h="100%">
        {renderImage()}
      </Flex>
    </GridItem>
  );
}
