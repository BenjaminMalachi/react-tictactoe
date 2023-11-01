import { useState } from "react";
import { Flex, Grid, GridItem, Image } from "@chakra-ui/react";

const crossImageURL = "src/assets/img/cross.svg";
const circleImageURL = "src/assets/img/circle.svg";

export default function Square(props) {
  const renderImage = () => {
    if (props.cell === 1) {
      return <Image boxSize={"50px"} src={crossImageURL} alt="Cross" />;
    } else if (props.cell === 2) {
      return <Image boxSize={"50px"} src={circleImageURL} alt="Circle" />;
    } else {
      return <></>;
    }
  };

  return (
    <GridItem
      as="button"
      onClick={props.handleClick}
      borderRadius="20px"
      w="100%"
      h="100%"
      bg="white"
    >
      <Flex align="center" justify="center" h="100%">
        {renderImage()}
      </Flex>
    </GridItem>
  );
}
