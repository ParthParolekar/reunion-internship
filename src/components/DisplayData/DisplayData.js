import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Card from "../Card/Card";

const DisplayData = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
      rowGap="12px"
      columnGap="6px"
      width="100%"
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Flex>
  );
};

export default DisplayData;
